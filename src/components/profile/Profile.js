import React, { useState, useEffect } from 'react'
import './Profile.css'
import { getProperties } from "../../Services/PropertiesService";
import { getUserInfo } from "../../Services/UserService"
import Cards from "./Cards";
import Typography from "@material-ui/core/Typography";

function Profile() {
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

                <Typography component="subtitle2" variant="subtitle2">
                { user.email }  
                </Typography>   
                   <Cards properties={properties} />
                    
                </div>
             
            </div>
            
        </div>
     )
}

export default Profile
