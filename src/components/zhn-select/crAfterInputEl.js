import ArrowCell from './ArrowCell';
import BtCircle from '../zhn/ButtonCircle2';

import {
  CL_SPINNER,
  CL_SPINNER_FAILED,
} from './CL';

const S_ARROW_SHOW = {
  borderColor: '#1b75bb transparent transparent'
};

const crAfterInputEl = (
  props,
  state,
  refArrowCell,
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
    isShowOption,
    optionNames
  } = state
  return !isLoading && !isLoadingFailed
    ? [placeholder || `Select ${optionName}...`,
        (<ArrowCell
          refEl={refArrowCell}
          arrowStyle={isShowOption ? S_ARROW_SHOW : void 0}
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
