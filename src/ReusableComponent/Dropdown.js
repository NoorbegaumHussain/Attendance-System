import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';



function Select(props) {


    return (
            <TextField
                label={props.label}
                data={props.data}
                inputRef={props.refValue}
                name={props.name}>
               {
                props.data.map (element => {
                return <MenuItem value={element}>{element}</MenuItem>})

               }
            </TextField>
    );
}export default Select;
// import { Select } from 'antd';

// const { Option } = Select;
// function Dropdown(props) {
    

//     return (
//         <>
//             <Select>
//     <Option value="jack">Jack</Option>
//     <Option value="lucy">Lucy</Option>
//     <Option value="tom">Tom</Option>
//   </Select>
//         </>
//     )
// }export default Dropdown;
