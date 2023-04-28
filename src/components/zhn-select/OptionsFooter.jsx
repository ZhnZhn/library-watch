import { forwardRef } from '../uiApi';

import BtCircle from '../zhn-atoms/ButtonCircle2';
import {
  CL_FOOTER,
  CL_NOT_SELECTED,
  CL_FOOTER_BTS,
  CL_FOOTER_INDEX,
  CL_FOOTER_MARGIN
} from './CL';

const S_BT_CIRCLE = {
  backgroundColor: '#949ab4'
};

const OptionsFooter = forwardRef(({
  indexActiveOption,
  nFiltered,
  nAll,
  onStepDown,
  onStepUp,
  onClear
}, ref) => (
  <div className={`${CL_FOOTER} ${CL_NOT_SELECTED}`}>
    <span className={CL_FOOTER_INDEX}>
      <span ref={ref}>
        {indexActiveOption}
      </span>
      <span>
         : {nFiltered}: {nAll}
      </span>
    </span>
    <span className={CL_FOOTER_BTS}>
      <BtCircle
         className={CL_FOOTER_MARGIN}
         style={S_BT_CIRCLE}
         caption="Dn"
         onClick={onStepDown}
      />
      <BtCircle
         className={CL_FOOTER_MARGIN}
         style={S_BT_CIRCLE}
         caption="Up"
         onClick={onStepUp}
      />
      <BtCircle
         style={S_BT_CIRCLE}
         caption="CL"
         onClick={onClear}
      />
    </span>
  </div>
));

export default OptionsFooter
