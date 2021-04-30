import { Route, Switch, useHistory } from "react-router";

import './App.css';
import Home from './Components/Home';
import Login from './Components/auth/Login';
import Header from './Components/Header';
import SearchPage from './Components/SearchPage';
import { getUserInfo } from "./Services/UserService";
import { useEffect, useState } from "react";
import { getAccessToken } from "./Store/AccessTokenStore";

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

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signin" render={() => <Login doLogin={getUser}/>} />
          <Route exact path="/search" component={SearchPage}/>       
        </Switch>
    </div>
  );
}

export default App;
