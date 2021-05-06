import React, { useState, useEffect, useContext } from 'react'
import './Profile.css'
import { getProperties } from "../../services/PropertiesService";
import { getUserInfo } from "../../services/UserService"
import Cards from "./Cards";
import Typography from "@material-ui/core/Typography";
import { UserContext } from '../../context/UserContext';




function Profile() {
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

                <Typography component="subtitle2" variant="subtitle2">
                { user?.email }  
                </Typography>   
                   <Cards properties={properties} />
                    
                </div>
             
            </div>
            
        </div>
     )
}

export default Profile
