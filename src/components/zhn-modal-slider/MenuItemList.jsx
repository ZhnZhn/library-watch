import { isFn, isBool } from '../../utils/isTypeFn'
import { bindTo } from '../uiApi';

import InputSwitch from '../zhn/InputSwitch';
import MenuAriaItem from './MenuAriaItem';

const SUB_MENU = 'sub'
, S_INPUT_SWITCH = {
  height: 38,
  padding: '9px 14px 0 14px',
  alignItems: 'baseline',
  fontSize: '16px'
}
, S_ITEM = { position: 'relative' }
, S_NEXT_PAGE = {
  position: 'absolute',
  display: 'inline-block',
  top : 0,
  right: 4,
  color: 'inherit',
  padding: '1px 16px 1px 0px',
  fontWeight: 'bold'
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
    <span style={S_NEXT_PAGE}>
      {'>'}
    </span>
  ) : null;

const MenuItemList = ({
  getRefItem,
  items,
  itemCl,
  pageNumber,
  onNextPage,
  onClose
}) => (
  <>
    {items.map((item, index) => {
      const {
        cn,
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
        <div key={name} role="menuitem" tabIndex="-1">
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
          className={cn || itemCl}
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
