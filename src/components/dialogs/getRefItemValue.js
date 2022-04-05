import {
  getRefValue
} from '../uiApi';

const getRefItemValue = ref =>
  (getRefValue(ref) || {}).value;

export default getRefItemValue
