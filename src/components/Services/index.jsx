import { Grid, Typography   } from "@material-ui/core";

import {
    Card,
    CardContent,
   
} from '@material-ui/core/'

import "./style.css";


const Services =() => {
  
  return (
      
    <div className="serv">
        <p className="title"> Our Services</p>
        <br></br>
    <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
    >
        <Grid item xs={12} sm={6} md={3}>
                <Card>
                    <img className="imgs" alt="something" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbPl6WboDjnlsqfc9qaT4w_rJ-p5J-TJrFg&usqp=CAU"
                                        height="120px" width="300px"
                    
                    />
                    <CardContent>
                        <Typography  className="ser" variant="h5" gutterBottom>
                        Western Union and OMT
                        </Typography>
                      
                    </CardContent>
                </Card>
             </Grid>
           <Grid item xs={12} sm={6} md={3}>
                <Card>
                    <img className="imgs" alt="something" src="https://www.pngitem.com/pimgs/m/50-508434_security-camera-systems-video-camera-hd-png-download.png" 
                    
                    />
                    <CardContent>
                        <Typography  className="ser" variant="h5" gutterBottom>
                            CCTV Security Systems
                        </Typography>
                    </CardContent>
                </Card>
             </Grid>

        <Grid item xs={12} sm={6} md={3}>
                <Card>
                    <img className="imgs" alt="something" src="https://virtuooza.com/wp-content/uploads/2020/01/maintenance.jpg" 
                        width="50%" hight="30%"
                    />
                    <CardContent>
                        <Typography className="ser" variant="h5" gutterBottom>
                       Hardware And Software
                        </Typography>
                    </CardContent>
                </Card>
             </Grid>
             <Grid item xs={12} sm={6} md={3}>
                <Card>
                    <img className="imgs" alt="something" src="https://otl.du.edu/wp-content/uploads/2016/04/visual_multimedia_sm2.jpg" 
                    height="120px" width="300px"
                    
                    />
                    <CardContent>
                        <Typography  className="ser" variant="h5" gutterBottom>
                       Multimedia Services
                        </Typography>
                    </CardContent>
                </Card>
             </Grid>
             
    </Grid>

</div>
  );
};

export default Services;