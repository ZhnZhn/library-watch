import {
  UI_THEME_OPTIONS,
  DF_UI_THEME,
  setUiTheme
} from '../styles/uiTheme';

import RowInputSelect from '../dialogs/rows/RowInputSelect'

const S_UI_THEME_CAPTION = {
  width: '90px'
}
, UI_THEME_PLACEHOLDER = `Default: ${DF_UI_THEME}`;

const CardUiTheme = (props) => (
    <div style={props.style}>
      <RowInputSelect
        width="240"
        isShowLabel={true}
        caption="UI Theme"
        captionStyle={S_UI_THEME_CAPTION}
        placeholder={UI_THEME_PLACEHOLDER}
        options={UI_THEME_OPTIONS}
        onSelect={setUiTheme}
      />
    </div>
);

export default CardUiTheme
