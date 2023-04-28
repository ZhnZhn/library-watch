import {
  CL_OPTIONS,
  CL_OPTIONS_DIV
} from './CL';

import crStyleWidth from './crStyleWidth';
import OptionsFooter from './OptionsFooter';

const S_BLOCK = { display: 'block' }
, S_NONE = { display: 'none' };

const DivOptions = ({
  refOptionsElement,
  refIndexElement,
  optionsStyle,
  width,
  isShowOption,
  indexActiveOption,
  nFiltered,
  nAll,
  onStepUp,
  onStepDown,
  onClear,
  children
}) => {
  const _widthStyle = crStyleWidth(
    width,
    isShowOption ? S_BLOCK : S_NONE
  );

  return (
    <div
       className={CL_OPTIONS}
       style={_widthStyle}
       data-scrollable={true}
     >
      <div
         ref={refOptionsElement}
         className={CL_OPTIONS_DIV}
         style={{...optionsStyle, ..._widthStyle}}
       >
        {children}
      </div>
      <OptionsFooter
         ref={refIndexElement}
         indexActiveOption={indexActiveOption}
         nAll={nAll}
         nFiltered={nFiltered}
         onStepUp={onStepUp}
         onStepDown={onStepDown}
         onClear={onClear}
      />
    </div>
  );
};

export default DivOptions
