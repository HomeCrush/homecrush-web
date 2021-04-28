import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SearchPage from './Components/SearchPage';
import { PropertyForm } from "./Components/PropertyForm";
import { PropertyFormTwo } from "./Components/PropertyFormTwo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




function App() {
  return (
    //BEM
    <div className="app">
      <Router>
          <Header />

        <Switch> 
          <Route exact path="/search">
            <SearchPage />
          </Route>
          
          <Route exact path="/propertyform" component ={ PropertyForm } />

          <Route path="/propertyformtwo" component ={ PropertyForm } />

          <Route exact path="/">
             <Home /> 
             <Footer />
          </Route>
          </Switch> 

         
          </Router>
        
        {/* SearchPage*/}
           {/* Header */}
           {/* .... */}   
    </div>
  );
}

export default App;
