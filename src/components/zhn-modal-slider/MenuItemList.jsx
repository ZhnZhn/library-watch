import MenuAriaItem from './MenuAriaItem';

const SUB_MENU = 'sub';

const S = {
  ITEM: {
    position: 'relative'
  },
  NEXT_PAGE: {
    position: 'absolute',
    display: 'inline-block',
    top : 0,
    right: 4,
    color: 'inherit',
    padding: '1px 16px 1px 0px',
    fontWeight: 'bold'
  }
};

const _fClick = ({ isClose, onClick, onClose }) => {
  return typeof onClick === 'function'
    ? isClose
        ? () => { onClick(); onClose() }
        : onClick
    : void 0;
}

const NextPageArrow = ({ type }) => {
  if (type !== SUB_MENU) return null;

  return (
    <span style={S.NEXT_PAGE}>
      {'>'}
    </span>
  );
}

const _renderMenuItems = (props) => {
  const {
    items, itemCl, pageNumber,
    onNextPage, onReg,
    onClose
  } = props;
  return items.map((item, index) => {
    const { cn, name, type, id, isClose, onClick } = item
    , _onClick = type === SUB_MENU
         ? onNextPage.bind(null, id, name, pageNumber)
         : _fClick({ isClose, onClick, onClose })
    , _onReg = index === 0
         ? onReg
         : void 0;
    return (
      <MenuAriaItem
        key={name}
        className={cn || itemCl}
        style={S.ITEM}
        onClick={_onClick}
        onReg={_onReg}
      >
        <span>{name}</span>
        <NextPageArrow type={type} />
      </MenuAriaItem>
    );
  });
}


const MenuItemList = props => (
  <>
    {_renderMenuItems(props)}
  </>
);

/*
MenuAriaItem.propTypes = {
  items: PropTypes.array,
  itemCl: PropTypes.string
  pageNumber: PropTypes.number,
  onNextPage: PropTypes.func,
  onReg: PropTypes.func,
  onClose: PropTypes.func
}
*/

export default MenuItemList
