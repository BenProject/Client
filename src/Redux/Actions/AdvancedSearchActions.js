import { UPDATE_PARAM } from '../Constants/AdvancedSearchConstants';

export const updateParam = (paramName, newValue) => {
  return { type: UPDATE_PARAM, paramName: paramName, newValue: newValue };
};
