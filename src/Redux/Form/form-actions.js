import { createAction } from '@reduxjs/toolkit';

//------------------------------------------------------------------------

//------------------------------------------------------------------------

export const onName = createAction('ContactForm/Name');
export const onNumber = createAction('ContactForm/Number');
export const onAddContact = createAction('ContactForm/Contact');
export const onDellContact = createAction('ContactForm/ContactDelite');
export const filt = createAction('ContactForm/filt');
