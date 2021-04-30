import { Route, Switch } from "react-router";
import { useEffect, useState } from "react";

import Login from './Components/auth/Login';
import Header from './Components/Header';
import SearchPage from './Components/SearchPage';
import { getUserInfo } from "./Services/UserService";
import { getAccessToken } from "./Store/AccessTokenStore";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
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
          <Route exact path="/signin" render={() => <Login doLogin={getUser}/>} />
          <Route exact path="/search" component={SearchPage}/>       
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
