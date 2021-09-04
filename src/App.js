import React from 'react';
import Navbar from './navbar';
import "./index.css";
import Header from './Header';
import HowItWorks from './HowItWorks';
import About from './About';
import Services from './Services';
import About2 from './About2';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';



const App = () => {
  return (
    <div>
     <Switch>
       <Route exact path="/" component={Home}></Route>
       <Route path="/about" component={About}></Route>
       <Route path="/contact" component={Contact}></Route>
       <Route path="/services" component={Services}></Route>
       
     </Switch>
    </div>
  );
};

export default App;