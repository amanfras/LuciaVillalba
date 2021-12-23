import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import headerfooter from './headerfooterReducer';
import auth from './auth';

const rootReducer = combineReducers({
  form,
  headerfooter,
  auth
});

export default rootReducer;