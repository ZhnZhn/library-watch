import { CL_MENU_MORE } from '../styleFn';
import useMenuMore from '../hooks/useMenuMore';

import SvgMore from '../zhn/SvgMore';
import ModalSlider from '../zhn-modal-slider/ModalSlider';

import crItemModelMore from './crItemModelMore';

export const useItemMenuMore = (
  crModelMore,
  modelOptions,
  svgMoreStyle
) => {
  const [
    _MENU_MODEL,
    isMenuMore,
    toggleIsMenuMore,
    _showMenuMore
  ] = useMenuMore(
    crModelMore, 
    modelOptions       
  );
  return [
    <ModalSlider
       key="ms"
       isShow={isMenuMore}
       className={CL_MENU_MORE}
       model={_MENU_MODEL}
       onClose={toggleIsMenuMore}
    />,
    <SvgMore
      key="sm"
      style={svgMoreStyle}
      onClick={_showMenuMore}
    />
  ];
};

const S_BT_MORE = {
  position: 'relative',
  top: 3,
  marginRight: 4
};

export const useItemMenuMoreToTop = (
  onMoveToTop,
  onToggleButtons
) => useItemMenuMore(
   crItemModelMore
  , {
     onMoveToTop,
     onToggleButtons
  }, S_BT_MORE
)
