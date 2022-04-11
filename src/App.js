import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Chip } from '@mui/material';
import Home from './components/Home'
import Questions from './components/Questions'
import Contact from './components/Contact'
import './App.css'



   

function App() {
  // const history = useNavigate();
  
  return (
   
    
   <Router>

        <div>
          <Routes>
            {/* <Route path="/about">
              <About />
            </Route>
            <Route path="/asher">
              <AsherYazar />
            </Route>
            <Route path="/bh">
              <BirchasHamazon />
            </Route>
            <Route path="/ahm">
              <AlHamichyah />
            </Route> */}
           <Route path="/" element={ <Home/> } />
        <Route path="q" element={ <Questions/> } />
        <Route path="c" element={ <Contact/> } />
        {/* <Route path="contact" element={ <Contact/> } /> */}
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;





  
    
  
