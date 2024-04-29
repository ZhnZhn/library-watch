import MenuAriaItem from './MenuAriaItem';

const SUB_MENU = 'sub'
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
}) => typeof onClick === 'function'
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
  ref,
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
        isClose,
        onClick
      } = item
      , _onClick = type === SUB_MENU
           ? onNextPage.bind(null, id, name, pageNumber)
           : _fClick({ isClose, onClick, onClose })
      , _ref = index === 0 ? ref : void 0;
      return (
        <MenuAriaItem
          ref={_ref}
          key={name}
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
