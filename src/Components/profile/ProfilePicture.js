import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import ProfilePicChanger from './ProfilePicChanger'


class ProfilePicture extends Component {
   

    render(){
        return (
            <div className="profile_picture">
                <h3>Hello</h3>
                <Avatar  />
                <ProfilePicChanger />
            </div>
        )
    }
}
export default ProfilePicture;
