import { Container, Grid } from "@material-ui/core";
import "./style.css";

import logo from "./ph.png";
import logo1 from "./fb.png";
import logo2 from "./ins.png";
import logo3 from "./tw.png";



const ContactUs = () => {
  return (
    <div className="contact">
      <Container>
        <br></br>      

      <Grid container spacing={3}>
        



        <Grid item xs>
        <br></br><br></br>        <h4>Fawaz Computer & Security Systems</h4>
                <i class="fas fa-map-marker-alt"></i> Tebnine - Main Road - Aljanoub - Lebanon
                   <br></br> 
                   <br></br> 

                   <i class="fas fa-phone-alt"></i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+961 03-442553
                   <br></br> 
                   <br></br> 
                   <img alt="logo" src={logo} width="22px"/> &nbsp;&nbsp; +961 07-326376
                   <br></br> 
                   <br></br> 
                   <i class="fas fa-envelope-square"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fawazpc@live.com
                   <br></br> 
                   <br></br> 
                   Follow Us On Social Meida  <br></br>
                   
                <div className="social">
                    <a href="https://www.facebook.com/FawazComputerCenter">
                   <img alt="logo" src={logo1} width="22px"/> 
                   </a>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <a href="https://www.instagram.com/fcss.sarl/">
                   <img alt="logo" src={logo2} width="22px"/> 
                   </a>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <a href="https://twitter.com/">
                   <img alt="logo" src={logo3} width="22px"/> 
                   </a>
                   </div>
        </Grid>
        <Grid item xs>
            <br></br><br></br>
        <h4 align="center">Contact Us</h4>
          
        <form action="/action_page.php">
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" placeholder="Enter email" id="email"/>
  </div>
  <div class="form-group">
  <label for="comment">Message:</label>
  <textarea class="form-control" placeholder="Your Message..."  rows="5" id="comment"></textarea>
</div>
  <button type="submit" class="btn btn-warning">Submit</button>
</form>
            
        </Grid>
        <Grid item xs>
            <br></br>
            <h4 align="center" >You Can Find Us On Google Maps!</h4>
            <br></br>
        <div><iframe title="FCSS Location in maps" width="400px" height="300px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Tebnine+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
    
        </Grid>
      </Grid>
      </Container>
    </div>
    
  ); 
};

export default ContactUs;
