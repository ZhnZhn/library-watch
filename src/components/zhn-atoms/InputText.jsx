import {
  forwardRef,
  useRef,
  useState,
  useCallback,
  useImperativeHandle
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

const FN_NOOP = () => {}
, _getRefValue = ref => ref.current;

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
    _getRefValue(_refInput).focus()
  }, []);

  useImperativeHandle(ref, () => ({
     getValue: () => {
       const _inputEl = _getRefValue(_refInput)
       return _inputEl
         ? _inputEl.value.trim()
         : void 0;
     },
     setValue: (value) => setValue(value),
     focus: () => {
       const _inputEl = _getRefValue(_refInput)
       if (_inputEl) {
         _inputEl.focus()
       }
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
