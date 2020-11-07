import {
  UPDATE_PARAM,
  RESET_PARAMS,
  UPDATE_TYPE,
} from '../Constants/AdvancedSearchConstants';

export const updateParam = (paramName, newValue) => {
  return { type: UPDATE_PARAM, paramName: paramName, newValue: newValue };
};

export const resetParams = () => {
  return { type: RESET_PARAMS };
};

export const updateType = (entityType) => {
  return { type: UPDATE_TYPE, entityType: entityType };
};
