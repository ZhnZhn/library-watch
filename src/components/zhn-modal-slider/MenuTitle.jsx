import { SvgArrowLeft } from '../zhn/svg/Svg';

import MenuAriaItem from './MenuAriaItem';

const S_ITEM = {
  position: 'relative'
}
, S_PREV_PAGE = {
  verticalAlign: 'text-bottom'
}
, S_TITLE = {
  paddingLeft: 8
};

const MenuTitle = ({
  refEl,
  titleCl,
  title,
  onClick
}) => title ? (
  <MenuAriaItem
    refEl={refEl}
    className={titleCl}
    style={S_ITEM}
    onClick={onClick}
  >
    <SvgArrowLeft style={S_PREV_PAGE} />
    <span style={S_TITLE}>
      {title}
    </span>
  </MenuAriaItem>
) : null;

export default MenuTitle
