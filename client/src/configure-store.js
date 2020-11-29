import { createStore } from 'redux';
import { languageReducer } from './language/reducer';

export const store = createStore(languageReducer);