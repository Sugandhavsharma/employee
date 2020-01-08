import { combineReducers } from 'redux';
import empReducer from './empReducer';

const rootReducer = combineReducers({
    employee: empReducer    
})

export default rootReducer;

