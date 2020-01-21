import {
    combineReducers
} from 'redux';

import ticketInfo from './reducers/ticketInfo'

const rootReducer = combineReducers({
    ticketInfo,
});

export default rootReducer;