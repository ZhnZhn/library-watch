import {
  useRef,
  useState,
  useCallback,
  useImperativeHandle,
  getRefValue,
  focusRefElement
} from '../uiApi';

import { crA11yLabelledByProps } from '../a11yFn';
import { crInputTextProps } from '../inputFn';

import { HAS_TOUCH_EVENTS } from '../has';

const CL_FIELD = 'm-field'
, CL_INPUT = `${CL_FIELD}__input`
, CL_BT_CLEAR = `${CL_FIELD}__bt-clear`;

const _isKeyClean = ({
  keyCode
}) => keyCode === 27 || keyCode === 46;
const _isKeyEnter = ({
  keyCode
}) => keyCode === 13;

const BtClear = ({
  isValue,
  onClick
}) => (
  <button
    type="button"
    className={CL_BT_CLEAR}
    tabIndex="-1"
    onClick={onClick}
  >
    {isValue ? 'x' : ''}
  </button>
);

const FN_NOOP = () => {};

const InputText = ({
  refEl,
  style,
  initValue,
  placeholder,
  maxLength=50,
  labelId,
  onEnter=FN_NOOP
}) => {
  const _refInput = useRef()
  , [value,  setValue] = useState(() => initValue || '')
  , _hChange = useCallback(event => {
    setValue(event.target.value)
  }, [])
  , _hKeyDown = useCallback(event => {
    if (_isKeyClean(event)){
      setValue('')
    } else if (_isKeyEnter(event)) {
      onEnter(event.target.value)
    }
  }, [onEnter])
  , _hClean = useCallback(() => {
    setValue('')
    focusRefElement(_refInput)
  }, []);

  useImperativeHandle(refEl, () => ({
     getValue: () => {
       const _inputEl = getRefValue(_refInput);
       return _inputEl
         ? _inputEl.value.trim()
         : void 0;
     },
     setValue: (value) => setValue(value),
     focus: () => {
       focusRefElement(_refInput)
     }
  }), [])

  return (
    <div className={CL_FIELD}>
      <input
        {...crA11yLabelledByProps(labelId)}
        {...crInputTextProps()}
        ref={_refInput}        
        className={CL_INPUT}
        style={style}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={_hChange}
        onKeyDown={_hKeyDown}
      />
      {
        HAS_TOUCH_EVENTS && <BtClear
          isValue={Boolean(value)}
          onClick={_hClean}
        />
      }
   </div>
  );
};

export default InputText
