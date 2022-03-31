import {
  useState,
  useCallback
} from '../uiApi';

const useButtonLoad = (
  packageName,
  loadJson
) => {
  const [{
    json,
    isLoading,
    isShow
  }, setJson] = useState({
    json: void 0,
    isLoading: false,
    isShow: false
  })
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hClick = useCallback(() => {
    setJson(prevState => {
      if (prevState.json) {
        return {
          ...prevState,
          isShow: !prevState.isShow
        };
      } else {
        loadJson({
          packageName,
          onLoad: (json) => {
            setJson({
              json,
              isShow: true,
              isLoading: false
            })
          }
        })
        return {
          ...prevState,
          isLoading: true
        };
      }
    })
  }, []);
  // packageName, loadJson
  /*eslint-enable react-hooks/exhaustive-deps */

  return [
    json,
    isLoading,
    isShow,
    _hClick
  ];
};

export default useButtonLoad
