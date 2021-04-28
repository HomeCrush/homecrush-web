import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SearchPage from './Components/SearchPage';
import SwipeButtons from './Components/SwipeButtons';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




function App() {
  return (
    //BEM
    <div className="app">
      <Router>
          <Header />

        <Switch> 
          <Route path="/search">
            <SearchPage />
            <SwipeButtons />
          </Route>
          <Route path="/">
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
