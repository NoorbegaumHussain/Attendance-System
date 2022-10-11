import React from 'react';
import TextField from '@material-ui/core/TextField';


    export default function BasicTextFields(props) {
        
    return (
        

          <TextField 
          style={{marginTop:'1px',width:'300px',fontFamily:'bold',margin:10}} 
          
          variant="outlined"
          error={props.touched  && props.error ? true : false} 
          helperText={ props.touched  && props.error ? props.error : ""}
          label={props.label}
          type={props.type}
          name={props.name}
          value={props.values}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      
        
      
    );
}
//-------------------------------------------------------------------------------------
//                 beer shop
// export default function BasicTextFields(props) {
        
//   return (<div>
//       <center>

//         <TextField style={{marginTop:'1px',width:'300px',fontFamily:'bold'}} 
//         required

//         placeholder={props.placeholder}
//         name={props.name}
//         values={props.values}
//         onChange={props.onChange}></TextField>
        
//       <br></br><br></br>
    
//       </center>
//       </div>
//   );
// }

