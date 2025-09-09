import BtCircle from '../zhn/ButtonCircle2';
import {
  CL_FOOTER,
  CL_NOT_SELECTED,
  CL_FOOTER_BTS,
  CL_FOOTER_INDEX
} from './CL';

const S_BT_CIRCLE = {
  backgroundColor: '#949ab4'
};

const OptionsFooter = ({
  refIndexElement,
  indexActiveOption,
  nFiltered,
  nAll,  
  onClear
}) => (
  <div className={`${CL_FOOTER} ${CL_NOT_SELECTED}`}>
    <span className={CL_FOOTER_INDEX}>
      <span ref={refIndexElement}>
        {indexActiveOption}
      </span>
      <span>
         : {nFiltered}: {nAll}
      </span>
    </span>
    <span className={CL_FOOTER_BTS}>
      <BtCircle
         style={S_BT_CIRCLE}
         caption="CL"
         onClick={onClear}
      />
    </span>
  </div>
);

export default OptionsFooter
