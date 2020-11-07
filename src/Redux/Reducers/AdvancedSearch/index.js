import { fromJS } from 'immutable';
import reducerFactory from '../../ReducerFactory';
import {
  RESET_PARAMS,
  UPDATE_PARAM,
} from '../../Constants/AdvancedSearchConstants';
import AdvancedSearchHandlers from './AdvancedSearchHandlers';

const handlers = {};
handlers[UPDATE_PARAM] = AdvancedSearchHandlers.updateParam;
handlers[RESET_PARAMS] = AdvancedSearchHandlers.resetParams;

const initialState = fromJS({ params: {} });

export default reducerFactory(initialState, handlers);
