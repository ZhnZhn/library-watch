import { memo } from '../../uiApi';

import Row from '../rows/Row';
import ButtonCircle from '../../zhn-atoms/ButtonCircle';

const S_ROW = { padding: '4px 0 8px 0' }
, S_BUTTON_CIRCLE = { marginLeft: 20 };

const ToolbarButtonCircle = memo(({
  buttons
}) => (
  <Row.Plain style={S_ROW}>
    {(buttons || []).map(
      ({caption, title, onClick}, index) => (
         <ButtonCircle
           key={caption + index}
           style={S_BUTTON_CIRCLE}
           caption={caption}
           title={title}
           onClick={onClick}
         />
     ))}
  </Row.Plain>
));

export default ToolbarButtonCircle
