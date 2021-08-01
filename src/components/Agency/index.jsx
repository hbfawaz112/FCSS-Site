import React from 'react';

import { Grid, Card} from "@material-ui/core";
import "./style.css";

import logo1 from "./dahua.png";
import logo2 from "./hikvision_0.png";
import logo3 from "./wikele1.png";


const Agency =() => {
  return (
    <div className="agency">
        <p className="title"> Our Partners</p>
        <br></br>
        <div className="gr">
          
    <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
    >
        <Grid item xs={12} sm={6} md={3}>
                <Card>
                    <img  className="imgss" alt="something"
                     src={logo1}  
                    
                    />
                   
                   
                </Card>
             </Grid>
           <Grid item xs={12} sm={6} md={3}>
                <Card>
                <img  className="imgss" alt="something"
                     src={logo2}  height="120px" width="300px"
                    
                    />
                                   </Card>
             </Grid>

        <Grid item xs={12} sm={6} md={3}>
                <Card>
                <img  className="imgss" alt="something"
                     src={logo3}  height="120px" width="300px"
                    
                    />
                   
                </Card>
             </Grid>
</Grid>
</div>
</div>
);

}
export default Agency;
