import { Container, Typography, Button, Grid } from "@material-ui/core";
import logo from "./aa.jpg";
import "./style.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography className="title" variant="h2">
              Welcome to Fawaz Computer & Security Systems
            </Typography>
            <h2>Hardware & Software - Laptop & Desktop CCTV Security Systems بيع وتركيب جميع انواع اجهزة الكمبيوتر واللابتوب بيع وتركيب احدث كاميرات المراقبة
</h2>
            
            
            <Button className="shopping-button1" href="#products">
              Shopping
            </Button>
            
            <Button className="shopping-button1" href="/contactus">
              Contact Us
            </Button>
            
            
          </Grid>
          <Grid className="brand" item sm={6}>
            <img src={logo} alt="Brand-tv" className="iii" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
