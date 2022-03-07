import { useCallback } from '../uiApi';
import useToggle from './useToggle';
import useRefInit from './useRefInit';

const useMenuMore = (
  crMenuModel,
  modelOptions
) => {
  const [
    _isMenuMore,
    _toggleMenuMore
  ] = useToggle()
    /*eslint-disable react-hooks/exhaustive-deps */
  , _showMenuMore = useCallback(() => {
    _toggleMenuMore(true)
  }, [])
  // _toggleIsMore
  /*eslint-enable react-hooks/exhaustive-deps */
  , _MENU_MODEL = useRefInit(
    () => crMenuModel(modelOptions)
  );
  return [
    _MENU_MODEL,
    _isMenuMore,
    _toggleMenuMore,
    _showMenuMore
  ];
};

export default useMenuMore
