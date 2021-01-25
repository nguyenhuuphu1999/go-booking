import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import home from './home';
import hotels from './hotels';

const rootReducer = combineReducers({
    home,
    hotels
});

const store = configureStore({
    reducer: rootReducer
});

export default store;