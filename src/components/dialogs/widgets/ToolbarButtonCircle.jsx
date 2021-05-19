import { memo } from 'react';

import Row from '../rows/Row';
import ButtonCircle from '../../zhn-atoms/ButtonCircle';

const S = {
  ROW : {
    paddingTop: 4,
    paddingBottom: 8
  },
  BUTTON_CIRCLE : {
    marginLeft: 20
  }
};

const ToolbarButtonCircle = memo(({ buttons }) => (
  <Row.Plain style={S.ROW}>
    {(buttons || []).map(({ caption, title, onClick }, index) => (
      <ButtonCircle
        key={caption + index}
        caption={caption}
        title={title}
        style={S.BUTTON_CIRCLE}
        onClick={onClick}
      />
    ))}
  </Row.Plain>
));

export default ToolbarButtonCircle
