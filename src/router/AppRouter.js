import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Header from '../components/Header';
import ContactUs from '../page/ContactUs';
import HomePage from '../page/HomePage';
import AboutUs from '../page/AboutUs';
import Service from '../page/Service';

class AppRouter extends Component {
     render() {
          return (
        <Fragment>
             <Router>
          <Header/>
           <Switch>
          <Route exact path="/" component={HomePage} /> 
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/contact" component={ContactUs} />               
          <Route exact path="/services" component={Service} />               
                       
        </Switch>
        </Router>
        </Fragment>
          )
     }
}

export default AppRouter
