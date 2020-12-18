import React from "react";

const HomeComponent = () => (
    <div class="home-container">
        <h1 class="header">Welcome to Innovalpha</h1>
        <hr class="header-dash"/>
        <h1 class="mission-header">Looking to start a business in the medical sector?</h1>
        <p class="home-text">We support you with the data you need. Choose the service you want to use</p>
        <div class="buttons-container">
            <div class="button1">
                <a routerLink='/medical-devices'>
                    <button class="devices-button">Medical Devices Documents</button>
                </a>
            </div>
            <div class="button2">
                <a routerLink='/trademark'>
                    <button class="trademark-button">Establish your Trademark</button>
                </a>
            </div>
        </div>
    </div>

)

export default HomeComponent;