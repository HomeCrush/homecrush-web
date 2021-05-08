import { Route, Switch } from "react-router";

import Navbar from "./components/home/Navbar";
import Header from './components/home/Header';
import SignUp from "./components/auth/SignUp";
import Login from './components/auth/Login';
import SearchPage from './components/SwipeCards/SearchPage';
import ListOptions from "./components/PropertyView/ListOptions";
import Profile from "./components/profile/Profile";
import PropertyForm from "./components/property/PropertyForm";
import MatchProfile from "./components/match/MatchProfile";
import Slider from "./components/PropertyView/Slider";
import FileUpload from "./components/profile/FileUpload";
import ContactCard from "./components/match/ContactInfo";






import './App.css';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Header} />

        <Route exact path="/signin" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/properties/create" component={PropertyForm} />
        <Route exact path="/property/:id/edit" component={PropertyForm} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/properties/crush" component={MatchProfile} />
        <Route exact path="/property/:id" component={Slider} />
        <Route exact path="/listados" component={ListOptions} />
        <Route exact path="/editprofile" component={FileUpload} />
        <Route exact path="/contactcard" component={ContactCard} />
        <Route exact path="/slider" component={Slider} />
      </Switch>
    </div>
  );
}

export default App;
