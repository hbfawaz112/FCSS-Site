import React from 'react';

import { Grid, Typography, Button } from "@material-ui/core";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from "react";

import {
    Card,
    CardContent,
   
} from '@material-ui/core/'

import "./style.css";


const Services =() => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);};const handleClose = () => {setOpen(false);};
   

      const [open1, setOpen1] = useState(false);
      const handleClickOpen1 = () => {
        setOpen1(true);};const handleClose1 = () => {setOpen1(false);};
  
        const [open2, setOpen2] = useState(false);
        const handleClickOpen2 = () => {
          setOpen2(true);};const handleClose2 = () => {setOpen2(false);};

          const [open3, setOpen3] = useState(false);
          const handleClickOpen3 = () => {
            setOpen3(true);};const handleClose3 = () => {setOpen3(false);};
  
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
                    <img  onClick={handleClickOpen} className="imgs" alt="something" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbPl6WboDjnlsqfc9qaT4w_rJ-p5J-TJrFg&usqp=CAU"
                                        height="120px" width="300px"
                    
                    />
                    <Dialog
                    
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Western Union and OMT Services"}</DialogTitle>
        <DialogContent className="dialog">
          <DialogContentText id="alert-dialog-description">
            <ul>
              <li>Service 1 </li>
              <li>Service 2 </li>
              <li>Service 3 </li>
              
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          
        </DialogActions>
      </Dialog>
                    <CardContent>
                        <Typography  className="ser" variant="h5" gutterBottom>
                        Western Union and OMT
                        </Typography>
                      
                    </CardContent>
                </Card>
             </Grid>
           <Grid item xs={12} sm={6} md={3}>
                <Card>
                    <img className="imgs" onClick={handleClickOpen1} alt="something" src="https://www.pngitem.com/pimgs/m/50-508434_security-camera-systems-video-camera-hd-png-download.png" 
                    />
                           <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"CCTV Security Systems Services"}</DialogTitle>
        <DialogContent className="dialog">
          <DialogContentText id="alert-dialog-description">
            <ul>
              <li>Service 1 </li>
              <li>Service 2</li>
              <li>Service 3 </li>
              
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1} color="primary">
            Close
          </Button>
          
        </DialogActions>
      </Dialog>
                    <CardContent>
                        <Typography  className="ser" variant="h5" gutterBottom>
                            CCTV Security Systems
                        </Typography>
                    </CardContent>
                </Card>
             </Grid>

        <Grid item xs={12} sm={6} md={3}>
                <Card>
                    <img onClick={handleClickOpen2} className="imgs" alt="something" src="https://i.ibb.co/SXw43Pb/pngwing-com.png" 
                        width="50%" hight="30%"
                    />
                     <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Hardware And Software Services"}</DialogTitle>
        <DialogContent className="dialog">
          <DialogContentText id="alert-dialog-description">
            <ul>
              <li>Service 1 </li>
              <li>Service 2</li>
              <li>Service 3 </li>
              
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2} color="primary">
            Close
          </Button>
          
        </DialogActions>
      </Dialog>
                    <CardContent>
                        <Typography className="ser" variant="h5" gutterBottom>
                       Hardware And Software
                        </Typography>
                    </CardContent>
                </Card>
             </Grid>



             <Grid item xs={12} sm={6} md={3}>
                <Card>
                    <img  onClick={handleClickOpen3} className="imgs" alt="something" src="https://otl.du.edu/wp-content/uploads/2016/04/visual_multimedia_sm2.jpg" 
                    height="120px" width="300px"/>

<Dialog
        open={open3}
        onClose={handleClose3}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Multimedia Services"}</DialogTitle>
        <DialogContent className="dialog">
          <DialogContentText id="alert-dialog-description">
            <ul>
              <li>Service 1 </li>
              <li>Service 2</li>
              <li>Service 3 </li>
              
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose3} color="primary">
            Close
          </Button>
          
        </DialogActions>
      </Dialog>                    <CardContent>
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
