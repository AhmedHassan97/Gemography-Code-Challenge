import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Home from './HomeComponent'

function Main() {
  
    return (
        <div className="App">
            <Switch>
                <Route path="/home" component={()=><Home></Home>}></Route> 
                <Redirect to="/home"></Redirect>
            </Switch>
        </div>
      );
  }
  export default Main;
  
