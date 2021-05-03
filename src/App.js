import { Route, Switch } from "react-router";
import { useEffect, useState } from "react";

import Login from './components/auth/Login';
import Header from './components/Header';
import SearchPage from './components/SearchPage';
import { getUserInfo } from "./services/UserService";
import { getAccessToken } from "./Store/AccessTokenStore";
import Navbar from "./Components/home/Navbar";
import Footer from './components/Footer';
import './App.css';
import Profile from "./Components/profile/Profile";
import ProfilePicture from "./Components/profile/ProfilePicture";
import MatchProfile from "./Components/match/MatchProfile";
import Slider from "./Components/PropertyView/Slider";
import PropertyCard from "./Components/PropertyView/PropertyCard";
import VirtualizedList from "./Components/PropertyView/ListOptions";
import SignUp from "./components/auth/SignUp";
import PropertyForm from "./components/property/PropertyForm";


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
<<<<<<< HEAD
          <Route exact path="/signin" render={() => <Login doLogin={getUser}/>} />
          <Route exact path="/signup" render={() => <SignUp doRegister={getUser}/>} />
          <Route exact path="/search" component={SearchPage}/>        
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profilepicture" component={ProfilePicture} />
          <Route exact path="/matchprofile" component={MatchProfile} />
          <Route exact path="/slider" component={Slider} />
          <Route exact path="/propertycard" component={PropertyCard} />
          <Route exact path="/listados" component={VirtualizedList} />

          
        </Switch>
      
=======
          <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/properties/create" component={PropertyForm} />
          <Route exact path="/search" component={SearchPage}/>       
        </Switch>
      <Footer /> 
>>>>>>> master
    </div>
  );
}

export default App;
