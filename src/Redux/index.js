import { combineReducers } from 'redux-immutable';
import ThemeReducer from './Reducers/Themes';
import AdvancedSearchReducer from './Reducers/AdvancedSearch';

const reducers = combineReducers({
  AdvancedSearch: AdvancedSearchReducer,
  Themes: ThemeReducer,
});

export default reducers;
