import {
  useMemo,
  getRefValue
} from '../uiApi';

import {
  CL_OPTIONS_ROW_ACTIVE
} from './CL';

import {
  isNumber,
  getDataIndex
} from './helperFns';

/*eslint-disable react-hooks/exhaustive-deps */
const useOptionDecorator = (
  refIndexNode,
  getActiveItemElement
) => useMemo(() => [
  //decorateElement
  element => {
    if (element){
      element.classList.add(CL_OPTIONS_ROW_ACTIVE);
      const dataIndex = getDataIndex(element)
      , _indexElement = getRefValue(refIndexNode);
      if (_indexElement && isNumber(dataIndex)) {
        _indexElement.textContent = dataIndex + 1
      }
    }
  },
  //undecorateElement
  element => {
     const _element = element || getActiveItemElement();
     if (_element){
      _element.classList.remove(CL_OPTIONS_ROW_ACTIVE);
     }
  }
], []);
//refIndexNode, getActiveItemElement
/*eslint-enable react-hooks/exhaustive-deps */

export default useOptionDecorator
