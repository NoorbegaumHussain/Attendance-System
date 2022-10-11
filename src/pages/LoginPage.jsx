import React from 'react';
import RegisterHeader from '../RegisterHeader.js';
import InputField from '../InputField';
import Selects from '../ReusableComponent/Select';
import Btn from '../ReusableComponent/Button.js';
import {useFormik} from 'formik';
import * as yup from 'yup';
import axios from 'axios'; 
import {Link} from 'react-router-dom';

function LoginPage() {const userType=['Student','Faculty','Admin']
    const schema = yup.object().shape(
        {
        username :yup.string().required('name is required'),
        password :yup.string().required('password is required'),
        userType: yup.string().required(),
      }
      ) 
    const formik = useFormik(
        {
            initialValues:{
              username:'',
              password:'',
              userType:'',
        },
        validationSchema:schema, 
        onSubmit: (data) => {
            console.log(data)
            axios({
                url: 'http://127.0.0.1:5000/login',
                method:'post',
                headers:{'Content-Type':'application/json'},
                data:data
              }).then((response)=>{                   //it gives after getting the response what is to be done
                console.log(response);
              }).catch((error)=>{                //same like try and except in python
                console.log(error);
                           //used to catch the errors so that it should not be displayed on the screen
              })
        }
    }
    );
    
    return (
        console.log(formik),
        <>
        <form onSubmit={formik.handleSubmit}>
            <center>
            <RegisterHeader 
            data="Sign In">
            </RegisterHeader>

            <div><InputField label='UserName' type='text' name='username' values={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.username} touched={formik.touched.username}/></div>
            <div><InputField label='Password' type='password' name='password' values={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.password} touched={formik.touched.password}/></div>
            <div><Selects label=' User Type'  name='userType' data={userType} values={formik.values.userType} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.errors.userType} touched={formik.touched.userType} ></Selects></div>
            <Btn type='submit'
            isdisabled={!(formik.dirty && formik.isValid)} 
            ></Btn>
            <br></br><br></br>
             <Link to='/studentRegister'><h5>Not Registered? Sign Up here </h5></Link>
            </center>
            </form>
        </ >
    )
}

export default LoginPage
