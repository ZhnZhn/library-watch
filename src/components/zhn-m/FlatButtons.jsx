import {
  SvgSave,
  SvgInfo,
  SvgSettings
} from '../zhn/svg/SvgIcons';

import FlatButton from './FlatButton';

const S_SVG_ICON = {
  verticalAlign: 'middle',
  margin: '0 8px'
};

const _fFlatButton = (
  SvgIcon
) => ({
  svgStyle = S_SVG_ICON,
  children,
  ...restProps
}) => (
  <FlatButton {...restProps}>
    <SvgIcon style={svgStyle} />
  </FlatButton>
);

export const FlatButtonSave = _fFlatButton(SvgSave)
export const FlatButtonInfo = _fFlatButton(SvgInfo)
export const FlatButtonSettings = _fFlatButton(SvgSettings)
