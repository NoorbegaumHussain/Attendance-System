import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import {MenuItem} from '@material-ui/core'

function Selects(props) {

  return (
    
      <FormControl variant="outlined">      
  <InputLabel ><h5>{props.label}</h5></InputLabel>
        <Select

          style={{margin:'10px',width:'300px'}}
          variant="outlined"

          
          label={props.label}
          // data={props.data}
          helperText={ props.touched && props.error ? props.error : ""}
          
          name={props.name}
          values={props.values}
          // error={props.error}
          onChange={props.onChange}
          onBlur={props.onBlur}
          // touched={props.touched}
          >
          {
          props.data.map((element) =>
          <MenuItem key={element} value={element}>{element}</MenuItem>)
          
          }
          </Select>
        </FormControl>
        
       
  );
}export default Selects;
