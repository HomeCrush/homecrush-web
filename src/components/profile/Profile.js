import React, { useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { getMyProperties, deleteProperty  } from "../../services/PropertiesService";
import CardProperty from "./Cards";
import Typography from "@material-ui/core/Typography";
import { UserContext } from '../../context/UserContext';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import EditProfile from './FileUpload';
import { ToastContainer } from 'react-toastify';
import { deleteMessage } from '../toasts/messages';

import './Profile.css'


const useStyles = makeStyles((theme) => ({
  btn:{
    background: "#44A1A0",
    margin: theme.spacing(1),
    color: "#fff",
    "&:hover": {
    background: "#0D5C63",
    color: "#fff",
  }
}
}))


function Profile() {
   const classes = useStyles();

    const [properties, setProperties] = useState([]);
    const { user, image } = useContext(UserContext)
      
    const deleteProp = (id) => {
      deleteProperty(id)
        .then(( ) => {
          getMyProperties().then((properties) => {
            setProperties(properties);
            deleteMessage()
          } )  
        }) 
    }

    useEffect(() => {
      getMyProperties().then((properties) => {
        setProperties(properties);
      });
    }, []);

    if(!user) {
      return "loading"
    }

     return (
          <div className="profile">
              <div className="upper_container_profile">
                  <div className="image_container_profile">
                      <img className="image_profile" src={user?.image} alt="" height="100px" width="100px" />
                              </div>
                  <EditProfile />            
                  <div className="lower_container_profile">
                  <Typography component="h6" variant="subtitle2">
                  { user?.email}  
                  </Typography>  
                  <div>
                    <Button className={classes.btn} size="small" color="primary" component={RouterLink} to="/properties/create">
                        Add
                    </Button>
                    <Button className={classes.btn} size="small" color="primary" component={RouterLink} to="/properties/crush">
                        CRUSH
                    </Button>
                  </div> 
                    <CardProperty properties={properties} deleteFunction={deleteProp}/>  
                  </div>             
              </div>              
          </div>
     )
}

export default Profile
