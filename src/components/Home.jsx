import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../components/Navbar';
import Center_content from '../components/Centrecontent';


import About from '../components/About';
import Contact from '../components/Contact';

import  View from '../components/View';
import Usersall from '../components/Userlists';
import  Transfer  from '../components/Transfer';
import '../App.css'
import '../nav.css';

import {Route,Switch} from 'react-router-dom';


function Home() {
  return (
      <>
     <Navbar/>
     <Switch>
     <Route exact path='/' component={Center_content}/> 
      <Route exact path='/about' component={About}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/view' component={View}/>
      <Route exact path='/userlist' component={Usersall}/>
      <Route exact path='/transfer/:id' component={Transfer}/>
      </Switch>
      </>
  );
}

export default Home;