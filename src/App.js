import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";

import Navbar from "./components/home/Navbar";
import Header from './components/home/Header';
import SignUp from "./components/auth/SignUp";
import Login from './components/auth/Login';
import SearchPage from './components/SwipeCards/SearchPage';
import Profile from "./components/profile/Profile";
import ProfilePicture from "./components/profile/ProfilePicture";
import MatchProfile from "./components/match/MatchProfile";
import Slider from "./components/PropertyView/Slider";
import PropertyCard from "./components/PropertyView/PropertyCard";
import ListOptions from "./components/PropertyView/ListOptions";
import { getUserInfo } from "./services/UserService";
import { getAccessToken } from "./Store/AccessTokenStore";
import FileUpload from "./components/FileUpload/FileUpload";
import Crush from "./components/SwipeCards/Crush";
import './App.css';


function App() {

  const [user, setUser] = useState(null)

  const getUser = () => {
    return getUserInfo().then(response => setUser(response))
  }

  useEffect(() => {
    if ( getAccessToken ) {
      getUser()
    }
  },[])

  return (

    <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Header}/>
          <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/search" component={SearchPage}/> 
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profilepicture" component={ProfilePicture} />
          <Route exact path="/matchprofile" component={MatchProfile} />
          <Route exact path="/slider" component={Slider} />
          <Route exact path="/propertycard" component={PropertyCard} />
          <Route exact path="/listados" component={ListOptions} />     
          <Route exact path="/crush" component={Crush} />  
          <Route exact path="/editprofile" component={FileUpload} />  
        </Switch>
    </div>
  );
}

export default App;
