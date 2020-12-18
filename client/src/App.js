import React from "react";
import "./App.css";
// import { Provider } from 'react-redux';
// import { HomeContainer } from './container';
// import { store } from './configure-store';
import { HomeComponent } from './components/HomeComponent';

const App = () => (
  <HomeComponent/>
  // <Provider store={store}>
  //   <HomeContainer/>
  // </Provider>
)

export default App;