import { isFn, isBool } from '../../utils/isTypeFn'
import { bindTo } from '../uiApi';
import { crMenuItemRole } from '../a11yFn';

import { SvgArrowRight } from '../zhn/svg/Svg';
import InputSwitch from '../zhn/InputSwitch';
import MenuAriaItem from './MenuAriaItem';

const SUB_MENU = 'sub'
, S_INPUT_SWITCH = {
  height: 38,
  padding: '9px 12px 0 0',
  alignItems: 'baseline',
  fontSize: '16px'
}
, S_ITEM = {
  position: 'relative'
}
, S_NEXT_PAGE = {
  display: 'inline-block',
  position: 'absolute',
  top: '8px',
  right: '6px',
  verticalAlign: 'text-bottom'
};

const _fClick = ({
  isClose,
  onClick,
  onClose
}) => isFn(onClick)
  ? isClose
      ? () => { onClick(); onClose() }
      : onClick
  : void 0;

const NextPageArrow = ({ type }) =>
  type === SUB_MENU ? (
    <SvgArrowRight style={S_NEXT_PAGE} />
  ) : null;

const MenuItemList = ({
  getRefItem,
  items,
  pageNumber,
  onNextPage,
  onClose
}) => (
  <>
    {items.map((item, index) => {
      const {
        name,
        type,
        id,
        isInitial,
        isClose,
        onClick
      } = item
      , _onClick = type === SUB_MENU
           ? bindTo(onNextPage, id, name, pageNumber)
           : _fClick({ isClose, onClick, onClose })
      return isBool(isInitial) ? (
        <div
          key={name}
          {...crMenuItemRole("-1")}
        >
          <InputSwitch
             refEl={getRefItem(index)}
             style={S_INPUT_SWITCH}
             initialValue={isInitial}
             caption={name}
             onToggle={_onClick}
           />
        </div>
      ) : (
        <MenuAriaItem
          key={name}
          refEl={getRefItem(index)}
          style={S_ITEM}
          onClick={_onClick}
        >
          <span>{name}</span>
          <NextPageArrow type={type} />
        </MenuAriaItem>
      );
    })}
  </>
);

export default MenuItemList
