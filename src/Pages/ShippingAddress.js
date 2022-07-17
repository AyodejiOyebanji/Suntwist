import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import NavBarOne from '../component/NavBarOne'
import NavBarTwo from '../component/NavBarTwo'
import SubNav from '../component/SubNav'

function ShippingAddress() {
  return (
    <div>
        <NavBarOne/>
        <NavBarTwo/>
        <SubNav/>
     <div className='container'>
     <div>
        <h2>Shipping Address</h2>  
     </div> 
         <div className='d-flex justify-content-center'>
        
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '95%' },
      }}
     
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" /> 
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" /> 
      
    </Box>

         </div>
    </div> 

    

    </div>
  )
}

export default ShippingAddress


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// export default function BasicSelect() {
//   const [age, setAge] = React.useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={age}
//           label="Age"
//           onChange={handleChange}
//         >
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }
