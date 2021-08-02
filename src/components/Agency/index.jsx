import React from 'react';

import { Grid} from "@material-ui/core";
import "./style.css";
import {
  Card,
} from '@material-ui/core/'

import logo1 from "./dahua.png";
import logo2 from "./hikvision_0.png";
import logo3 from "./wikele1.png";


const Agency =() => {
  return (
    <div className="agency">
        <p className="title"> Our Partners</p>
        <br></br>
        <div className="gr">
        <Grid container spacing={6}>
            <Grid key="1" item xs={12} sm={6} md={3}>
            
            <Card>
                    <img  className="imgss" alt="something"
                     src={logo1}     />
            </Card>       
            
            </Grid>
            <Grid key="2" item xs={12} sm={6} md={3}>
            <Card>
                    <img  className="imgss" alt="something"
                     src={logo2}     />
            </Card>       
            
            </Grid>
            
            <Grid key="3" item xs={12} sm={6} md={3}>
            <Card>
                    <img  className="imgss" alt="something"
                     src={logo3}     />
            </Card>       
            
            </Grid>
            
         
         


         </Grid>
</div>
        
    </div>
);

}
export default Agency;
