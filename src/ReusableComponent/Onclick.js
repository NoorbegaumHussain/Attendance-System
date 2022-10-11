import React from 'react'

function Onclick(props) {
    return (
        <h2
        style={{color: 'black'}}
        
        onChange={props.onChange}
        >
           
         {   
            props.values >= 18 ? "Here is your beer..Thanks for shopping":"You are too small to drink beer!"
         }   
        </h2>
        
    )
}

export default Onclick

// import React from 'react'

// function Onclick() {
//     return (
        
//      Math.floor(Math.random()*6+1)
       
//     )
// }

// export default Onclick



