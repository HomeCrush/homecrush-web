import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";

import Navbar from "./Components/home/Navbar";
import Header from './components/Header';
import SignUp from "./components/auth/SignUp";
import Login from './components/auth/Login';
import SearchPage from './components/SearchPage';
import Profile from "./Components/profile/Profile";
import ProfilePicture from "./Components/profile/ProfilePicture";
import MatchProfile from "./Components/match/MatchProfile";
import Slider from "./Components/PropertyView/Slider";
import PropertyCard from "./Components/PropertyView/PropertyCard";
import VirtualizedList from "./Components/PropertyView/ListOptions";
import { getUserInfo } from "./services/UserService";
import { getAccessToken } from "./Store/AccessTokenStore";

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
          <Route exact path="/listados" component={VirtualizedList} />      
        </Switch>
    </div>
  );
}

export default App;
