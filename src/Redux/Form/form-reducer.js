import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { contactsApi } from '../../Services/API';

import { onName, onNumber, filt } from './form-actions';

//------------------------------------------------------------------------

const initStateName = 'BORIS';
const initStateNumber = '+38 066 123 4567';

//------------------------------------------------------------------------

const nameReducer = createReducer(initStateName, {
  [onName]: (_, { payload }) => payload,
});
const numberReducer = createReducer(initStateNumber, {
  [onNumber]: (_, { payload }) => payload,
});
const filtReducer = createReducer('', {
  [filt]: (_, { payload }) => payload,
});

//------------------------------------------------------------------------

export const contactFormReducer = combineReducers({
  name: nameReducer,
  number: numberReducer,
  filt: filtReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
});
