import { fromJS } from 'immutable';
import reducerFactory from '../../ReducerFactory';
import { TOGGLE_THEME } from '../../Constants/themeConstants';
import ThemeHandler from './ThemeHandlers';

const handlers = {};
handlers[TOGGLE_THEME] = ThemeHandler.toggleTheme;

const initialState = fromJS({ isDarkTheme: false });

export default reducerFactory(initialState, handlers);
