// DEFAULT

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// -------------------------------------------------------------------------------------------------------------
//              TO DISPLAY HELLO

// export default App;

// function App(){

//   return(
 
//     <div>
//   <center><h1>Hello</h1></center>
//   <h2>
//     heading2
//   </h2>
//   </div>
 
  
//   );
// }

// export default App;

// -------------------------------------------------------------------------------------------
//         COUNTER APP


// import React ,{useState} from 'react';


// function App(props) {

//     const [count,setCount] = useState(0);


//     return (
//         <div>
//           <p>{count}</p>
     
//     <button onClick={()=>setCount(count+1)}>increment</button>
//     <button onClick={()=>setCount(0)}>reset</button>
//         </div>
//     )
// }export default App;

// --------------------------------------------------------------------------------------------------------
//    TO CREATE A LOGIN PAGE


// import React from 'react';
// import LoginHeader from './LoginHeader.js';
// import InputField from './InputField.js';
// import ButtonField from './Button.js';


// function App() {
  
//    return (
//      <div>
//      <LoginHeader/>
//      <InputField/><br></br>
//      <ButtonField/>
//      </div>
//    );
//  }export default App;
// -----------------------------------------------------------------------------------------------------------------
//          TO DISPLAY FAMILY MEMBERS
// import React,{useState} from 'react'

// function App() {
//   const [myfamily,setState] = useState({my_name:"",fathername:"",mothername:"",brothers:""});
  
//   return (
//     <div>
       
//       <h1>Myname:{myfamily.my_name}<br></br>
//          Father:{myfamily.fathername}<br></br>
//          Mother:{myfamily.mothername}<br></br>
//          Brothers:{myfamily.brothers}<br></br>
//       </h1>
//       <button
//           onClick={()=>setState({my_name:"Noor",fathername:"Kasim",mothername:"Sakina",brothers:"Toufiq & Rehan"})}>Update
//       </button>{" "}<button
//           onClick={() =>setState({my_name:"",fathername:"",mothername:"",brothers:""})}>Reset
//       </button>
      
//     </div>
//   )
// }export default App;
// -------------------------------------------------------------------------------------------------
//       TO CREATE STUDENT REGISTER PAGE




// --------------------------------------------------------------------------------------------------
//     TO DISPLAY TABLECOMPONENT LOADERNCOMPONENT AND APPBARCOMPONENT
// import React,{useState} from 'react'
// import DataTable from './TableComponent'
// import SimpleBackdrop from './LoaderComponent'
// import ButtonAppBar from './AppbarComponent';

// export default function App() {
//   const[state,setState]= useState({DataTable:"",SimpleBackdrop:"",ButtonBar:""});
//   return (
//     <div>
       
//       
//       <button onClick={()=>setState({DataTable:<DataTable/>})}>Show Table</button>
//       <button onClick={()=>setState({DataTable:""})}>Reset</button>
      
//       <button onClick={()=>setState({SimpleBackdrop:<SimpleBackdrop/>})}>Backdrop</button>
//       <button onClick={()=>setState({SimpleBackdrop:""})}>Reset</button>
      
//       <button onClick={()=>setState({ButtonAppBar:<ButtonAppBar/>})}>Show Appbar</button>
//       <button onClick={()=>setState({ButtonAppBar:""})}>Reset</button>

//       <p>{state.DataTable}</p>
//       <p>{state.SimpleBackdrop}</p>
//       <p>{state.ButtonAppBar}</p>
//     </div>
//   )
// }
// --------------------------------------------------------------------------------------------------------
                    //  MY BEAR SHOP
// import React,{useState} from 'react'
// import RegisterHeader from './RegisterHeader'
// import BasicTextFields from './InputField.js' 
// import Button from '@material-ui/core/Button';
// import {useFormik} from 'formik'
// import OnClick from './ReusableComponent/Onclick'

// function App(props) {
//   const [state,setState]=useState({OnClick:""})
//   const formik = useFormik(
//   {
//       initialValues:{
//         age:'',

//       },
//       onSubmit: (data) => {
//         console.log(data)

        
//       },                                   
//   }
// );
 

//   return (<form onSubmit={formik.handleSubmit}>
//     <div><center>
//       <RegisterHeader/><br></br>
//       <p>{state.OnClick}</p>
      
//       <BasicTextFields name="name" placeholder="Enter your name" /><br></br>
//       <BasicTextFields name="age" placeholder="Enter your age" values={formik.values.age} onChange={formik.handleChange} /><br></br>
//       <Button 
//       style={{backgroundColor:"#25CCF7",color:"primary",variant:"contained",marginBottom:20}}
//       onClick={()=>setState({OnClick:<OnClick values={formik.values.age} onChange={formik.handleChange}/>})}>SUBMIT</Button>
     
     
     
//     </center>
//     </div>
//     </form>
//   )
// }

// export default App

// //-------------------------------------------------------------------------------
// import React,{useState} from 'react'
// import RegisterHeader from './RegisterHeader'
// import Button from '@material-ui/core/Button';
// import Onclick from './ReusableComponent/Onclick'

// function App() {
//   const [state,setState]=useState({first:"TO START CLICK ON ROLL DICE"})
//   return (
//     <div>
//       <center>
//       <RegisterHeader/>
//     {state.first?<h2 style={{fontFamily: "Optima"}}>{state.first}</h2>
    
//       :<h2 style={{fontFamily: "Optima"}}>YOUR SCORE :{state.OnClick}</h2>}
       
       
//       <Button 
//       style={{backgroundColor:"#01579b",color:"white",variant:"contained",margin:30}}
//       onClick={()=>setState({OnClick:0}) }
//       >PLAY AGAIN
//       </Button>
//       <Button 
//       style={{backgroundColor:"#00897B",color:"white",variant:"contained",margin:30}}
//       onClick={()=>setState({OnClick:<Onclick/>})}
//       >ROLL DICE
//       </Button>
//       </center>
//       </div>
//   )
// }

// export default App

//-----------------------------------------------------------------------------------------
// attendence management system
//BrowserRouter or Router wraps all the routes
//Route helps u to display any comp based url
//link helps u to link file as same as a tag
//Switch stops matching al urls
//react router dom is the latest version which is same as previous version i.e react router
//
import React from 'react'
import LoginPage from './pages/LoginPage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";  //this is the way of importing router and Browserrouter can also be written as router
import RegisterStudent from './pages/RegisterStudent'//learn react routing in 5 minutes visit it for more knowlwdge about routing
import StudentDashboard from './pages/StudentDashboard'
function App() {
  return (//returimg a react fragment
    <>
    <Router>
      <Switch>   {/* //with the help of switch s is stooped at the first result which it has got */}
        <Route exact path='/' component={LoginPage}/> {/* component is displayed firstlogin page by default*/}
        <Route exact path='/studentRegister' component={RegisterStudent}/> {/*when we type studentRegisrer in browser RegisterStudent page is displayed */}
        <Route exact path='/studentDashboard' component={StudentDashboard}></Route>
      </Switch>
    </Router>
      
    </>
  )
}

export default App


//what is a route ?
//any page in an application is called a route

//what is routing?

//server side rendering(renders whole page) and client side rendering/refreshing
  

