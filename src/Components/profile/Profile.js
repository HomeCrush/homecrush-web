import React, { useState, useEffect } from 'react'
import './Profile.css'
import Card from '../Card'
import PropertyCard from '../Card'
import { getProperties } from "../../Services/PropertiesService";

function Profile() {
    const [properties, setProperties] = useState();
    const [title, setTitle] = useState('Titulo');
    const [location, setLocation] = useState('Location');
   
    useEffect(() => {
        getProperties(_id).then((properties) => {
          setProperties(properties);
        });
      }, [_id]);

     return (
        <div className="profile">
            <div className="upper_container_profile">
                <div className="image_container_profile">
                    <img className="image_profile" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="" height="100px" width="100px" />
                </div>
             
                <div className="lower_container_profile">
                    <h3> { title } </h3>
                    <h4> { location } </h4>
                    <h5> { properties } </h5>
                        <PropertyCard properties={properties} />
                    
                </div>
             
            </div>
            
        </div>
     )
}

export default Profile
