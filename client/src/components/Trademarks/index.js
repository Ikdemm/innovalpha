import React from 'react';
import { Provider } from 'react-redux';
import { HomeContainer } from '../../container';
import { store } from '../../configure-store';

function HomeComponent() {
  return (
    <Provider store={store}>
      <HomeContainer/>
    </Provider>
  )
}

export default HomeComponent;