import React from 'react';
import RegisterHeader from '../RegisterHeader.js';
import InputField from '../InputField.js';
import Selects from '../ReusableComponent/Select';
import Btn from '../ReusableComponent/Button.js';
import {useFormik} from 'formik';
import * as yup from 'yup';
import axios from 'axios'; //used for valiation
import SuccessToast from '../ReusableComponent/SuccessToast.jsx';
import ErrorToast from '../ReusableComponent/ErrorToast.jsx'
import {ToastContainer} from 'react-toastify';

export default function RegisterStudent(props) {
  
const sem=['First','Second','Third','Fourth','Fifth','Sixth','Seventh']
const batch_year=['2010','2015','2017','2018']
const branch=['CSE','E&E','E&C','MEcH','CIVIL']
const division=['A','B']
const phoneExp=/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s.]{0,1}[0-9]{3}[-\s.]{0,1}[0-9]{4}$/
const schema = yup.object().shape(
  {
  name :yup.string().required('name is required'),
  usn  :yup.string().required('usn is required'),
  email : yup.string().required('email is required field').email('invalid email'),
  phone_number:yup.string().required('phone number is required').matches(phoneExp,"invalid phone number"),
  password:yup.string().required('password is a required field').min(8,"password must be atleast 8 character"),
  sem:yup.string().required('sem is a required field'),
  batch_year:yup.string().required('batch year is a required field'),
  branch:yup.string().required('branch is a required field'),
  division:yup.string().required('division is a required field'),
}
)                          //declaration of schema variable
const formik = useFormik(
  {
      initialValues:{
        name:'',
        usn:'',
        email:'',
        phone_number:'',
        password:'',
        sem:'',
        batch_year:'',
        branch:'',
        division:'',

      },
      validationSchema:schema,                //to check whether a user has entered correct and valid data and schema is a variable we cam give any name
      onSubmit: (data) => {
        axios({
          url: 'http://127.0.0.1:5000//registerStudent',
          method:'post',
          headers:{'Content-Type':'application/json'},
          data:data
        }).then((res)=>{                   //it gives after getting the response what is to be done
          console.log(res);
          SuccessToast("sucessfully registered student");
        }).catch((error)=>{                //same like try and except in python
          console.log(error);
          ErrorToast("failed")
                     //used to catch the errors so that it should not be displayed on the screen
        })
      },                                   
  }
);
return (<div>
     
    <form onSubmit={formik.handleSubmit}>
    <center>
      <RegisterHeader data="Register Student" /><br></br>   
      
      <InputField label="Name"  name="name" values={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.name} touched={formik.touched.name}/>
      <InputField label="USN"  name="usn" values={formik.values.usn} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.usn} touched={formik.touched.usn}/><br></br><br></br>
      <InputField label="Email"  name="email" values={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.email} touched={formik.touched.email}/> 
      <InputField label="Phone Number" name="phone_number" values={formik.values.phone_number} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.phone_number} touched={formik.touched.phone_number}/><br></br><br></br>
      
      <Selects label="Semester" data={sem} id="sem" name="sem" values={formik.values.sem}  onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.sem} touched={formik.touched.sem}/>
      <Selects label="Batch Year"  data={batch_year} id="batch_year" name="batch_year" values={formik.values.batch_year} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.batch_year} touched={formik.touched.batch_year}/><br></br><br></br>
      <Selects label="Branch"  data={branch} id="branch" name="branch"  values={formik.values.branch} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.branch} touched={formik.touched.branch}/>
      <Selects label="Division"  data={division} id="division" name="division"  values={formik.values.division} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.division } touched={formik.touched.division}/><br></br><br></br>
      <InputField type="password" label="Password"  name="password" values={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.password} touched={formik.touched.password}/>
   <br></br><br></br>
      <Btn 
      style={{backgroundColor:"#dd2c00",variant:"contained",marginBottom:20}}
      type="submit" isdisabled={!(formik.dirty && formik.isValid)} onBlur={formik.handleBlur}/>
     
       
     
  </center>
    </form>
    <ToastContainer/>
    </div>
   
  )
}