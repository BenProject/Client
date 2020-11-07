import { combineReducers } from 'redux-immutable';
import ThemeReducer from './Reducers/Themes';
import OntologyParamsReducer from './Reducers/OntologyParams';

const reducers = combineReducers({
  OntologyParams: OntologyParamsReducer,
  Themes: ThemeReducer,
});

export default reducers;
