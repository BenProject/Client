import { fromJS } from 'immutable';
import reducerFactory from '../../ReducerFactory';
import { UPDATE_PARAM } from '../../Constants/AdvancedSearchConstants';
import AdvancedSearchHandlers from './AdvancedSearchHandlers';

const handlers = {};
handlers[UPDATE_PARAM] = AdvancedSearchHandlers.updateParam;

const initialState = fromJS({ params: {} });

export default reducerFactory(initialState, handlers);
