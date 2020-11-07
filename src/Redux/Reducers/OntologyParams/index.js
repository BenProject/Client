import { fromJS } from 'immutable';
import reducerFactory from '../../ReducerFactory';
import {
  RESET_PARAMS,
  UPDATE_PARAM,
  UPDATE_TYPE,
} from '../../Constants/AdvancedSearchConstants';
import AdvancedSearchHandlers from './AdvancedSearchHandlers';

const handlers = {};
handlers[UPDATE_PARAM] = AdvancedSearchHandlers.updateParam;
handlers[RESET_PARAMS] = AdvancedSearchHandlers.resetParams;
handlers[UPDATE_TYPE] = AdvancedSearchHandlers.updateType;

const initialState = fromJS({ params: {}, entityType: '' });

export default reducerFactory(initialState, handlers);
