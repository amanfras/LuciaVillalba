import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import headerfooter from './headerfooterReducer';

const rootReducer = combineReducers({
  form,
  headerfooter
});

export default rootReducer;