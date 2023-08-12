//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import React from 'react';
import Home from './prop/Home';
import Addbar from './prop/Addbar';
import Menubar from './prop/Menubar';
import Signup from './prop/Signup';
import Login from './prop/Login';
//import CssBaseline from './@mui/material';
export default function App(){
  return(
    <div>
    {/* <CssBaseline/> */}
    <div style={{position: 'fixed', width: '100%' , top: '0', overflow: 'hidden' }}>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='login' element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
      </div>
      <div style={{margin: '4% 0% 0% 0%' , width: '100%' }}>
      {/* <Navbar/> */}
      <Addbar/>
      <Menubar/>
      </div>
    </div>
  );
}






















// import React from 'react';
// import { BrowserRouter, Route , Routes} from 'react-router-dom';
// import Home from './prop/Home';
// import Signup from './prop/Signup';
// import Login from './prop/Login';
// //import { Link } from 'react-router-dom';
// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path='login' element={<Login/>}/>
//         <Route path="signup" element={<Signup/>}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }