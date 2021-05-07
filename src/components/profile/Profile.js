import React, { useState, useEffect, useContext } from 'react'
import './Profile.css'
import { makeStyles } from '@material-ui/core/styles';
import { getProperties } from "../../services/PropertiesService";
import { getUserInfo } from "../../services/UserService"
import Cards from "./Cards";
import Typography from "@material-ui/core/Typography";
import { UserContext } from '../../context/UserContext';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({  btn:{
  background: "#44A1A0",
  margin: theme.spacing(0.5),
  marginBottom: theme.spacing(2),
  color: "#fff",
  "&:hover": {
background: "#0D5C63",
color: "#fff"
}
}
}))


function Profile() {
   const classes = useStyles();

    const [properties, setProperties] = useState([]);
    const [userInfo,  setUserInfo]= useState({});
    const { user } = useContext(UserContext)
    
    useEffect(() => {
        getUserInfo().then((user) => {
            setUserInfo(user)
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
                    <img className="image_profile" src={user?.image} alt="" height="100px" width="100px" />
                </div>
               
                <div className="lower_container_profile">

                <Typography component="h6" variant="subtitle2">
                { user?.email }  
                </Typography>  
                <div>
                  <Button className={classes.btn} size="small" color="primary" component={RouterLink} to="/properties/create">
                      Add
                  </Button>
                  <Button className={classes.btn} size="small" color="primary" component={RouterLink} to="/matchprofile">
                      CRUSH
                  </Button>
                </div> 
                   <Cards properties={properties} />  
                </div>
             
            </div>
            
        </div>
     )
}

export default Profile
