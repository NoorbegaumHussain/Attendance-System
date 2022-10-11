import React from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function RegisterHeader(props) {
    return (
        <div><center>
            <h1>
            
            <Container maxWidth="sm"
            style={{ backgroundColor: '#3f51b5',margin:10,height: 'auto',borderRadius:5 }} >
              <Typography 
              component="div" 
              >
              <h1 style={{color:'white', padding: '10px'}}>{props.data} </h1>
              </Typography>
            </Container>
            
            </h1>
            </center>
        </div>
    )
}export default RegisterHeader;

// import React from 'react'
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// // import { GiBeerStein } from 'react-icons/gi';
//                                                      //BLACK COLOR #111d2c
// function RegisterHeader() {
//     return (
//         <div><center>
//             <h1>
//             <React.Fragment>
//               <CssBaseline />
//                <Container maxWidth="sm" >
//     <Typography component="div" style={{ backgroundColor: '#ab003c', height: 'auto' }}>
//         <h1 style={{fontFamily: 'Helvetica', padding: '10px',color:"white", margin:10}}>
//         {/* <GiBeerStein/>  THE  BEER  SHOP */}
//         ROLL DICE GAME
//         </h1>
//     </Typography>
//                </Container>
//             </React.Fragment>
//             </h1>
//             </center>
//         </div>
//     )
// }export default RegisterHeader;
