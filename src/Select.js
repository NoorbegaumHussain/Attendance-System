import React from 'react';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';


function NativeSelects(props) {

  return (
    
        <Select
        >  
            {props.data.map((ele) => (<MenuItem value={ele1}>{"ele"} </MenuItem>
                <MenuItem value={ele2}>{"ele"} </MenuItem>
                <MenuItem value={ele3}>{"ele"} </MenuItem>))
                 }

        </Select>
      
   
  )
}export default NativeSelects;
