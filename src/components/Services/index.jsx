import { Grid, Button, Container, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { commerce } from "../../lib/commerce";
import { useState, useEffect } from "react";
import Spinner from "../Spinner";
import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
    CardContent,
    CardMedia ,
    CardHeader
} from '@material-ui/core/'

import "./style.css";


const Services =() => {
    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
            padding: theme.spacing(2)
        }
    }))
    const classes = useStyles()
   
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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbPl6WboDjnlsqfc9qaT4w_rJ-p5J-TJrFg&usqp=CAU"
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
                    <img src="https://www.pngitem.com/pimgs/m/50-508434_security-camera-systems-video-camera-hd-png-download.png" 
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
                    <img src="https://virtuooza.com/wp-content/uploads/2020/01/maintenance.jpg" 
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
                    <img src="https://otl.du.edu/wp-content/uploads/2016/04/visual_multimedia_sm2.jpg" 
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