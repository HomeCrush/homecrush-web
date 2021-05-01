import { Route, Switch } from "react-router";
import { useEffect, useState } from "react";

import Login from './Components/auth/Login';
import Header from './Components/Header';
import SearchPage from './Components/SearchPage';
import { getUserInfo } from "./Services/UserService";
import { getAccessToken } from "./Store/AccessTokenStore";
import Footer from './Components/Footer';
import './App.css';
import SignUp from "./Components/auth/SignUp";
import Navbar from "./Components/Navbar";
//import ProductsHome from "./Components/ProductsHome";
import Profile from "./Components/profile/Profile";
import ProfilePicture from "./Components/profile/ProfilePicture";
import MatchProfile from "./Components/match/MatchProfile";
import Slider from "./Components/Slider";




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
          <Route exact path="/signin" render={() => <Login doLogin={getUser}/>} />
          <Route exact path="/signup" render={() => <SignUp doRegister={getUser}/>} />
          <Route exact path="/search" component={SearchPage}/>        
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profilepicture" component={ProfilePicture} />
          <Route exact path="/matchprofile" component={MatchProfile} />
          <Route exact path="/slider" component={Slider} />

        
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
