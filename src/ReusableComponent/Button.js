import React from 'react'
import Button from '@material-ui/core/Button';

export default function Btn(props) {
  

    return (
        <>
            <Button  
            variant="contained" color="secondary" paddingBottom="5"
            type={props.type}
            disabled={props.isdisabled}
            
            >
            
  Submit
</Button>
        </>
    )
}
