import {
  useRef,
  useState,
  useImperativeHandle,
  focusRefInput
} from '../uiApi';

import {
  crA11yLabelledByProps
} from '../a11yFn';

const S_ROOT = {
  position: 'relative',
  display: 'inline-block',
  width: 250,
  backgroundColor: '#e1e1cb',
}
, S_INPUT = {
  color: 'green',
  width: '100%',
  height: 30,
  paddingLeft: 10,
  fontSize: '16px',
  fontWeight: 'bold',
  background: 'transparent none repeat scroll 0 0',
  border: 'medium none',
  outline: 'medium none',
}
, S_HR = {
  width: 230,
  margin: '0 0 5px 10px',
  borderWidth: 'medium medium 1px',
  borderStyle: 'none none solid',
  borderColor: 'red',
  borderImage: 'none',
}
, COLOR_VALID = '#1b75bb'
, COLOR_NOT_VALID = '#f44336'
, S_HR_VALID = { borderColor: COLOR_VALID }
, S_HR_NOT_VALID = { borderColor: COLOR_NOT_VALID }
, S_ERR_MSG = {
  color: COLOR_NOT_VALID,
  padding: '0 0 5px 10px',
  fontSize: '12px',
  fontWeight: 'bold'
}
, FN_NOOP = () => {};

const InputDate = ({
  labelId,
  refEl,
  initialValue,
  errorMsg,
  onTest=FN_NOOP
}) => {
  const _refInput = useRef()
  , [state, setState] = useState({
    value: initialValue || '',
    isValid: true,
    errMsg: null
  })
  , {
    value,
    isValid,
    errMsg
  } = state
  , _hChangeValue = (event) => {
    const { value } = event.target;
    setState(prevState => {
      const [isValid, errMsg] = onTest(value)
        ? [true, null]
        : [false, prevState.errMsg];
      return {
        value,
        isValid,
        errMsg
      };
    })
  }
  , _hBlurValue = () => {
    const [isValid, errMsg] = onTest(value)
      ? [true, null]
      : [false, errorMsg];
    setState({
      value,
      isValid,
      errMsg
    })
  }
  , _hrStyle = isValid
      ? S_HR_VALID
      : S_HR_NOT_VALID;

  useImperativeHandle(refEl, () => ({
    getValue: () => value,
    isValid: () => isValid,
    focus: () => focusRefInput(_refInput)
  }), [isValid, value])

  return (
    <div style={S_ROOT}>
      <input
         {...crA11yLabelledByProps(labelId)}
         ref={_refInput}
         type="text"    
         //autoComplete="new-date"
         autoCorrect="off"
         autoCapitalize="off"
         spellCheck={false}
         style={S_INPUT}
         placeholder="YYYY-MM-DD"
         value={value}
         onChange={_hChangeValue}
         onBlur={_hBlurValue}
      />
      <hr style={{...S_HR, ..._hrStyle}} />
      <div style={S_ERR_MSG}>
        {errMsg}
      </div>
    </div>
  );
};

export default InputDate
