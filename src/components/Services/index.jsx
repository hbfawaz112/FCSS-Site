import { Grid, Typography } from "@material-ui/core";

import {
    Card,
    CardContent,
   
} from '@material-ui/core/'

import "./style.css";


const Services =() => {
  
  return (
      
    <div className="serv">
        <h1 align="center" >Our Services</h1>
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
                    <img alt="something" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbPl6WboDjnlsqfc9qaT4w_rJ-p5J-TJrFg&usqp=CAU"
                                        height="120px" width="300px"
                    
                    />
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                        Western Union and OMT
                        </Typography>
                    </CardContent>
                </Card>
             </Grid>
           <Grid item xs={12} sm={6} md={3}>
                <Card>
                    <img alt="something" src="https://scontent.fbey15-1.fna.fbcdn.net/v/t1.6435-9/222471040_2747924411998017_3512527789756200665_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=NR9PZzkd384AX_-Vo5K&_nc_ht=scontent.fbey15-1.fna&oh=858e00c2012ebbf313a8d3432ed338e6&oe=612697A8" 
                    height="120px" width="300px"
                    
                    />
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            CCTV Security Systems
                        </Typography>
                    </CardContent>
                </Card>
             </Grid>

        <Grid item xs={12} sm={6} md={3}>
                <Card>
                    <img alt="something" src="https://virtuooza.com/wp-content/uploads/2020/01/maintenance.jpg" 
                    height="120px" width="300px"
                    
                    />
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                       Hardware And Software
                        </Typography>
                    </CardContent>
                </Card>
             </Grid>
             <Grid item xs={12} sm={6} md={3}>
                <Card>
                    <img alt="something" src="https://otl.du.edu/wp-content/uploads/2016/04/visual_multimedia_sm2.jpg" 
                    height="120px" width="300px"
                    
                    />
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
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