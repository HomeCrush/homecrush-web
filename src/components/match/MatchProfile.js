import React, { useState, useEffect, useContext } from 'react'
import '../profile/Profile.css'
import { matchList } from "../../services/PropertiesService";
import MatchCards from "./MatchCards";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  btn:{
    background: "#44A1A0",
    margin: theme.spacing(1),
    color: "#fff",
    "&:hover": {
    background: "#0D5C63",
    color: "#fff",
  }
},
  icon: {
    height: 38,
  },
  message: {
    marginTop: 20
  }
}));



function MatchProfile() {
    const classes = useStyles();
    const { user } = useContext(UserContext)
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
      setLoading(true)
      matchList().then((propertiesResponse) => {
        setProperties(propertiesResponse);
        setLoading(false);
      });
    }, []);

    if (loading) {
      return "loading..."
    }
                           
    console.log(properties)
     return (
       <div className="profile">
         <div className="upper_container_profile">
           <div className="image_container_profile">
             <img
               className="image_profile"
               src={user?.image}
               alt="user"
               height="100px"
               width="100px"
             />
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
               <Button
                 className={classes.btn}
                 size="small"
                 color="primary"
                 component={RouterLink}
                 to="/profile"
               >
                 Profile
               </Button>
             </Grid>
             {properties.length > 0 ? (
               <MatchCards properties={properties} />
             ) : (
               <Typography className={classes.message}>
                 {" "}
                 You don't have a Crush 💔
               </Typography>
             )}
           </div>
         </div>
       </div>
     );
}

export default MatchProfile
