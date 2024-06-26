//import PropTypes from 'prop-types'
import {
  useRef,
  useState,
  useCallback,
  useEffect,
  useImperativeHandle,
  getRefValue,
  setRefValue
} from '../uiApi';
import usePrevValue from '../hooks/usePrevValue';
import useRefItemCaption from './useRefItemCaption';

import RowInputSelect from '../dialogs/rows/RowInputSelect';

const SelectGroupList = ({
  refEl,
  ...restProps
}) => {
  const _prevProps = usePrevValue(restProps)
  , _refGroupCaption = useRef(null)
  , [
      _refListCaption,
      _hSelectList
    ] = useRefItemCaption()
  , [
      listOptions,
      setListOptions
    ] = useState([])
  , _hSelectGroup = useCallback(item => {
    if (item && item.caption){
      setRefValue(_refGroupCaption, item.caption)
      setListOptions(item.lists || [])
    } else {
      setRefValue(_refGroupCaption, null)
    }
  }, [])
  , {
    getWatchListsByGroup,
    groupCaption,
    groupOptions,
    listCaption
  } = restProps;

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (_prevProps && restProps !== _prevProps) {
      const _groupCaption = getRefValue(_refGroupCaption);
      if (restProps.groupOptions !== _prevProps.groupOptions){
          setRefValue(_refGroupCaption, null)
          setRefValue(_refListCaption, null)
          setListOptions([]);
      } else if (_groupCaption) {
        setListOptions(prevListOptions => {
          const listOptions = getWatchListsByGroup(_groupCaption);
          if (listOptions !== prevListOptions) {
            setRefValue(_refListCaption, null)
            return listOptions;
          }
          return prevListOptions;
        })
      }
    }
  })
  /*eslint-disable react-hooks/exhaustive-deps */

  useImperativeHandle(refEl, () => ({
    getValue: () => ({
      captionGroup: getRefValue(_refGroupCaption),
      captionList: getRefValue(_refListCaption)
    }),
    setValueNull: () => {
      setRefValue(_refGroupCaption, null)
      setRefValue(_refListCaption, null)
    }
  }))

  return (
    <div>
       <RowInputSelect
         caption={groupCaption}
         options={groupOptions}
         onSelect={_hSelectGroup}
       />
       <RowInputSelect
         caption={listCaption}
         options={listOptions}
         onSelect={_hSelectList}
       />
    </div>
  );
};

/*
SelectGroupList.propTypes = {
  groupCaption: PropTypes.string,
  groupOptions: PropTypes.array,
  listCaption: PropTypes.string
}
*/

export default SelectGroupList
