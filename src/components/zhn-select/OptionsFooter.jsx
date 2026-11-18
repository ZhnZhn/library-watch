import { ButtonCircle2 } from '../zhn/ButtonCircle';
import { SvgX } from '../zhn/BtSvgX';

import {
  CL_FOOTER_NOT_SELECTED,
  CL_FOOTER_BTS,
  CL_FOOTER_INDEX,
  COLOR_OPTIONS_OPEN
} from './CL';

const S_BT_CIRCLE = {
  backgroundColor: '#e1e1cb',
  height: '32px',
  lineHeight: 'unset',
  padding: '6px',
  stroke: COLOR_OPTIONS_OPEN
};

const OptionsFooter = ({
  refIndexElement,
  indexActiveOption,
  nFiltered,
  nAll,
  onClear
}) => (
  <div className={CL_FOOTER_NOT_SELECTED}>
    <span className={CL_FOOTER_INDEX}>
      <span ref={refIndexElement}>
        {indexActiveOption}
      </span>
      <span>
         : {nFiltered}: {nAll}
      </span>
    </span>
    <span className={CL_FOOTER_BTS}>
      <ButtonCircle2
         ariaLabel="Clear input and close options"
         style={S_BT_CIRCLE}
         onClick={onClear}
      >
        <SvgX />
      </ButtonCircle2>
    </span>
  </div>
);

export default OptionsFooter
