import { CL_MENU_MORE } from '../styleFn';
import useMenuMore from '../hooks/useMenuMore';

import SvgMore from '../zhn/SvgMore';
import ModalSlider from '../zhn-modal-slider/ModalSlider';

import crModelMore from './crItemModelMore';
import { S_BT_MORE } from './Item.Style';

const useItemMenuMore = (
  onMoveToTop,
  onToggleButtons
) => {  
  const [
    _MENU_MODEL,
    isMenuMore,
    toggleIsMenuMore,
    _showMenuMore
  ] = useMenuMore(crModelMore, {
    onMoveToTop,
    onToggleButtons
  });
  return [
    <ModalSlider
       isShow={isMenuMore}
       className={CL_MENU_MORE}
       model={_MENU_MODEL}
       onClose={toggleIsMenuMore}
    />,
    <SvgMore
      style={S_BT_MORE}
      onClick={_showMenuMore}
    />
  ];
};

export default useItemMenuMore
