import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Trademarks from './Trademarks';

const HomeComponent = () => (
        
    <Router>
      <div class="home-container">
        <h1 class="header">Welcome to Innovalpha</h1>
        <hr class="header-dash"/>
        <h1 class="mission-header">Looking to start a business in the medical sector?</h1>
        <p class="home-text">We support you with the data you need. Choose the service you want to use</p>
        <div class="buttons-container">
          <div class="button1">
            <Link to='/medical-devices'>
              <button class="devices-button">Medical Devices Documents</button>
            </Link>
          </div>
          <div class="button2">
            <Link to='/trademark'>
              <button class="trademark-button">Establish your Trademark</button>
            </Link>
          </div>
        </div>
        <Switch>
          <Route path="/medical-devices">
            {/* <About /> */}
          </Route>
          <Route path="/trademark">
            <Trademarks/>
          </Route>
        </Switch>
      </div>
    </Router>
  )

export default HomeComponent;