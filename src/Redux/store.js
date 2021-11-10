import { configureStore } from '@reduxjs/toolkit';
import { contactFormReducer } from './Form/form-reducer';
// import logger from 'redux-logger';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { contactsApi } from '../Services/API';
//------------------------------------------------------------------------

//------------------------------------------------------------------------

export const store = configureStore({
  reducer: contactFormReducer,

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
    // logger,
  ],

  devTools: process.env.NODE_ENV === 'development',
});

//------------------------------------------------------------------------
setupListeners(store.dispatch);
