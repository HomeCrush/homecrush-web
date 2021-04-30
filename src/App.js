import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import SearchPage from './Components/SearchPage';

import { PropertyForm } from "./Components/PropertyForm";
import { PropertyFormTwo } from "./Components/PropertyFormTwo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




function App() {
  return (
    //BEM
    <div className="app">
      <Router>
         

        <Switch> 

          <Route path="/search">
            <Navbar />
            <SearchPage />  
          </Route>
          <Route path="/">
          <Header />

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
