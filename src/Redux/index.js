import { combineReducers } from 'redux-immutable';
import ThemeReducer from './Reducers/Themes';

const reducers = combineReducers({
  Themes: ThemeReducer,
});

export default reducers;
