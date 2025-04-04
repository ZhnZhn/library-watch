import ArrowCell from './ArrowCell';
import BtCircle from '../zhn/ButtonCircle2';

import {
  CL_SPINNER,
  CL_SPINNER_FAILED,
} from './CL';

const crAfterInputEl = (
  props,
  state,
  isShowOption,
  hToggleOptions
) => {
  const {
     isLoading,
     isLoadingFailed,
     placeholder,
     optionName='',
     onLoadOption
   } = props
  , {
    optionNames
  } = state
  return !isLoading && !isLoadingFailed
    ? [placeholder || `Select ${optionName}...`,
        (<ArrowCell
          isShowOption={isShowOption}
          onClick={hToggleOptions}
       />)]
    : isLoading
        ? [`Loading ${optionNames}...`,
             (<span
                 className={CL_SPINNER}
                 data-loader="circle"
          />)]
        : isLoadingFailed
            ? [`Loading ${optionNames} Failed`,
               (<BtCircle
                   className={CL_SPINNER_FAILED}
                   data-loader="circle-failed"
                   onClick={onLoadOption}
             />)]
            : [];
};

export default crAfterInputEl
