import {DATE,INCOME, EXPEDITURE, INIT, TYPE, DELETE, BTN} from './types';
import { createAction } from '@reduxjs/toolkit';

export const income = createAction(INCOME);
export const expediture = createAction(EXPEDITURE);
export const init = createAction(INIT);

export const Type = createAction(TYPE);
export const DateSet = createAction(DATE);
export const Btn = createAction(BTN);
export const deleteLists = createAction(DELETE)

