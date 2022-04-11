import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Chip } from '@mui/material';
import '../App.css'
import { Link } from 'react-router-dom';

export default function Home() {
  // const history = useNavigate();
  
  return (
    <>
    <br></br>
    <div style={{
          padding: '24px 20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gridGap: '20px',
         }}>
           {/* 1 */}
  <Card sx={{ maxWidth: 345 }}>
  <CardContent>
  <Avatar sx={{ bgcolor: 'blue' }}>FB</Avatar>
  <br></br>
    <Typography gutterBottom variant="h5" component="div" style={{textAlign: 'center'}}>
     <span style={{fontWeight: 'bold', textDecoration: 'underline'}}>The Conversation</span>
    </Typography>
    <Typography variant="body2" style={{fontSize: '24px',marginLeft: '36px'}}>
     What to tell boys. This section covers, both the science and <i>Halacha</i>, that boys have to know before hitting Puberty.
     <br></br>
    </Typography>
  </CardContent>
  <CardActions>
   
  {/* <Button size="small">  */}
  <br></br>
  <br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to="/q"><Chip  label="Conversation" style={{backroundColor:'blue!important'}}/></Link>
  
 
  
  {/* </Button> */}
  </CardActions>
</Card>
{/* 2 */}
<Card sx={{ maxWidth: 345 }}>
  <CardContent>
  <Avatar sx={{ bgcolor: 'blue' }}>FB</Avatar>
  <br></br>
    <Typography gutterBottom variant="h5" component="div" style={{textAlign: 'center'}}>
     <span style={{fontWeight: 'bold', textDecoration: 'underline'}}>Questions And Answers</span>
    </Typography>
    <Typography variant="body2" style={{fontSize: '24px'}}>
     Have a question, about how and what, to tell or teach yous son, <i>talmid</i> etc. or why.
     <br></br>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontSize: '23px'}}>Click Learn More</span>
    </Typography>
  </CardContent>
  <CardActions>
   
  {/* <Button size="small">  */}
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to="/q"><Chip  label="Learn More" style={{backroundColor:'blue!important'}}/></Link>
  
 
  
  {/* </Button> */}
  </CardActions>
</Card>
    
   {/* 3 */}
<Card sx={{ maxWidth: 345 }}>
  <CardContent>
  <Avatar sx={{ bgcolor: 'blue' }}>FB</Avatar>
  <br></br>
    <Typography gutterBottom variant="h5" component="div" style={{textAlign: 'center'}}>
     <span style={{fontWeight: 'bold', textDecoration: 'underline'}}>Contact</span>
    </Typography>
   
  <br></br>
  <br></br>
  <br></br>
  <br></br>
    <Typography variant="body2" style={{fontSize: '24px',marginLeft: '48px'}}>
     <span>Contact Information</span>
     <br></br>
     
    </Typography>
  </CardContent>
  <CardActions>
   
  {/* <Button size="small">  */}
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <Link to="/c"><Chip  label="Contact Us" style={{backroundColor:'blue!important'}}/></Link>
  
 
  
  {/* </Button> */}
  </CardActions>
</Card>

</div>
</>
  );
}