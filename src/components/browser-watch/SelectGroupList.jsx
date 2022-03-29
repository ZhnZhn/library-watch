//import PropTypes from 'prop-types'
import {
  forwardRef,
  useRef,
  useState,
  useCallback,
  useEffect,
  useImperativeHandle
} from '../uiApi';
import usePrevValue from '../hooks/usePrevValue';
import useRefItemCaption from './useRefItemCaption';

import RowInputSelect from './RowInputSelect';

const _getRefValue = ref => ref.current
, _setRefValue = (ref, value) => ref.current = value

const SelectGroupList = forwardRef((props, ref) => {
  const _prevProps = usePrevValue(props)
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
      _setRefValue(_refGroupCaption, item.caption)
      setListOptions(item.lists || [])
    } else {
      _setRefValue(_refGroupCaption, null)
    }
  }, [])
  , {
    store,
    groupCaption,
    groupOptions,
    listCaption
  } = props

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (_prevProps && props !== _prevProps) {
      const _groupCaption = _getRefValue(_refGroupCaption);
      if (props.groupOptions !== _prevProps.groupOptions){
          _setRefValue(_refGroupCaption, null)
          _setRefValue(_refListCaption, null)
          setListOptions([]);
      } else if (_groupCaption) {
        setListOptions(prevListOptions => {
          const listOptions = store.getWatchListsByGroup(_groupCaption);
          if (listOptions !== prevListOptions) {
            _setRefValue(_refListCaption, null)
            return listOptions;
          }
          return prevListOptions;
        })
      }
    }
  })
  /*eslint-disable react-hooks/exhaustive-deps */

  useImperativeHandle(ref, () => ({
    getValue: () => ({
      captionGroup: _getRefValue(_refGroupCaption),
      captionList: _getRefValue(_refListCaption)
    }),
    setValueNull: () => {
      _setRefValue(_refGroupCaption, null)
      _setRefValue(_refListCaption, null)
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
});

/*
SelectGroupList.propTypes = {
  store: PropTypes.object,
  groupCaption: PropTypes.string,
  groupOptions: PropTypes.array,
  listCaption: PropTypes.string
}
*/

export default SelectGroupList
