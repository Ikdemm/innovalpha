import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { withRouter } from 'react-router-dom';

import Trademarks from './Trademarks';
import MedicalDevices from './MedicalDevices';

const HomeComponent = withRouter(({location}) => (
      <div>
        <Switch location={location}>
          <Route exact path="/">
            <div className="home-container">
              <h1 className="header-title">Welcome to Innovalpha</h1>
              <hr className="header-dash"/>
              <h1 className="mission-header">Looking to start a business in the medical sector?</h1>
              <p className="home-text">We support you with the data you need. Choose the service you want to use</p>
              <div className="buttons-container">
                <div className="button1">
                  <Link to='/medical-devices'>
                    <button className="devices-button">Medical Devices Documents</button>
                  </Link>
                </div>
                <div className="button2">
                  <Link to='/trademarks'>
                    <button className="trademark-button">Establish your Trademark</button>
                  </Link>
                </div>
              </div>
            </div>
          </Route>
          <Route path="/medical-devices">
            <MedicalDevices/>
          </Route>
          <Route path="/trademarks">
            <Trademarks/>
          </Route>
        </Switch>
      </div>
  )
)

export default HomeComponent;