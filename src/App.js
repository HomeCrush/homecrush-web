import { Route, Switch } from "react-router";

import Login from './components/auth/Login';
import Header from './components/Header';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';
import './App.css';
import SignUp from "./components/auth/SignUp";
import PropertyForm from "./components/property/PropertyForm";


function App() {

  return (

    <div className="App">

        <Switch>
          <Route exact path="/" component={Header}/>
          <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/properties/create" component={PropertyForm} />
          <Route exact path="/search" component={SearchPage}/>       
        </Switch>
      <Footer /> 
    </div>
  );
}

export default App;
