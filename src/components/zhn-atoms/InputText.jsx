import {
  forwardRef,
  useRef,
  useState,
  useCallback,
  useImperativeHandle,
  getRefValue
} from '../uiApi';

import has from '../has';

const { HAS_TOUCH } = has
, CL_FIELD = 'm-field'
, CL_INPUT = 'm-field__input'
, CL_BT_CLEAR = 'm-field__bt-clear';

const _isKeyClean = ({ keyCode }) => keyCode === 27
 || keyCode === 46;
const _isKeyEnter = ({ keyCode }) => keyCode === 13;

const BtClear = ({
  isValue,
  onClick
}) => (
  <button
    class={CL_BT_CLEAR}
    tabIndex="-1"
    onClick={onClick}
  >
    {isValue ? 'x' : ''}
  </button>
);

const FN_NOOP = () => {};

const _focusElement = ref => {
  const _element = getRefValue(ref);
  if (_element) {
    _element.focus()
  }
};

const InputText = forwardRef(({
  style,
  initValue,
  placeholder,
  maxLength=50,
  onEnter=FN_NOOP
}, ref) => {
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
    _focusElement(_refInput)
  }, []);

  useImperativeHandle(ref, () => ({
     getValue: () => {
       const _inputEl = getRefValue(_refInput)
       return _inputEl
         ? _inputEl.value.trim()
         : void 0;
     },
     setValue: (value) => setValue(value),
     focus: () => {
       _focusElement(_refInput)
     }
  }), [])

  return (
    <div className={CL_FIELD}>
      <input
        ref={_refInput}
        type="text"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        className={CL_INPUT}
        style={style}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={_hChange}
        onKeyDown={_hKeyDown}
      />
      {
        HAS_TOUCH && <BtClear
          isValue={Boolean(value)}
          onClick={_hClean}
        />
      }
   </div>
  );
});

export default InputText
