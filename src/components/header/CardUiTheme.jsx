import {
  UI_THEME_OPTIONS,
  DF_UI_THEME
  //setUiTheme
} from '../styles/uiTheme';

import RowInputSelect from '../dialogs/rows/RowInputSelect'

const CardUiTheme = (props) => (
    <div style={props.style}>
      <RowInputSelect
        width="210"
        isShowLabel={true}
        caption="UI Theme"
        placeholder={`Default: ${DF_UI_THEME}`}
        options={UI_THEME_OPTIONS}
        //onSelect={setUiTheme}
      />
    </div>
);

export default CardUiTheme
