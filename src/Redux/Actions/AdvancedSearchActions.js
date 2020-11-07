import {
  UPDATE_PARAM,
  RESET_PARAMS,
} from '../Constants/AdvancedSearchConstants';

export const updateParam = (paramName, newValue) => {
  return { type: UPDATE_PARAM, paramName: paramName, newValue: newValue };
};

export const resetParams = () => {
  return { type: RESET_PARAMS };
};
