import React, { useState, useEffect } from 'react'
import '../profile/Profile.css'
import { getProperties } from "../../services/PropertiesService";
import { getUserInfo } from "../../services/UserService"
import MatchCards from "./MatchCards";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  btn:{
    background: "#44A1A0",
    margin: theme.spacing(1),
    padding:theme.spacing(0),
    color: "#fff",
    "&:hover": {
    background: "#0D5C63",
    color: "#fff",
  }
},
  icon: {
    height: 38,
  },
}));



function MatchProfile() {
    const classes = useStyles();

    const [properties, setProperties] = useState([]);
    const [user,  setUser]= useState({});
   
    
    useEffect(() => {
        getUserInfo().then((user) => {
            setUser(user)
        }).catch(e => console.log(e));
      }, []);

    useEffect(() => {
      getProperties().then((prods) => {
        setProperties(prods);
      });
    }, []);

     return (
        <div className="profile">
            <div className="upper_container_profile">
                <div className="image_container_profile">
                    <img className="image_profile" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="" height="100px" width="100px" />
                </div>
             
                <div className="lower_container_profile">
               
                <Grid>
                    <img
                    className={classes.icon}
                    src="https://res.cloudinary.com/homecrus/image/upload/v1619719003/Brand/HOME_CRUSH-01-removebg-preview_tco4n3.png"
                    alt=""
                    /> 
                    <Typography component="h1" variant="h5">
                   Crush 
                   </Typography>   
                   <Button className={classes.btn} size="small" color="primary" component={RouterLink} to="/profile">
                      Profile
                  </Button>
                    
                </Grid>
                   <MatchCards properties={properties} />
                    
                </div>
             
            </div>
            
        </div>
     )
}

export default MatchProfile
