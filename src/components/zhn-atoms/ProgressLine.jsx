import {
  useRef,
  useEffect
} from '../uiApi';

import useRerender from '../hooks/useRerender';

const CL = "progress-line"
, DF_COLOR = '#2f7ed8'
, TM_PERIOD = 800
, T_WIDTH = 'width 500ms linear'
, T_OPACITY = 'opacity 400ms linear';

const _crStyle = (
  backgroundColor,
  opacity,
  width,
  transition
) => ({
   backgroundColor,
   width,
   opacity,
   transition
})
, _getRefValue = ref => ref.current
, _setRefValue = (ref, value) => ref.current = value;

const ProgressLine = ({
  color=DF_COLOR,
  completed
}) => {
  const _rerenderComp = useRerender()
  , _refWasCompleted = useRef(false)
  , _refIdCompleted = useRef(null)
  , _refWasOpacied = useRef(false)
  , _refIdOpacied = useRef(null);

  useEffect(()=>{
    if (_getRefValue(_refWasCompleted)){
      _setRefValue(_refIdCompleted, setTimeout(_rerenderComp, TM_PERIOD))
    } else if (_getRefValue(_refWasOpacied)){
      _setRefValue(_refIdOpacied, setTimeout(_rerenderComp, TM_PERIOD))
    }
  })

  useEffect(()=>{
    return () => {
      clearTimeout(_getRefValue(_refIdCompleted))
      clearTimeout(_getRefValue(_refIdOpacied))
    }
  }, [])

  let _style;

  if (_getRefValue(_refWasOpacied)) {
    _style = _crStyle(color, 1, 0)
    _setRefValue(_refWasOpacied, false);
  } else if (_getRefValue(_refWasCompleted)) {
    _style = _crStyle(color, 0, '100%', T_OPACITY)
    _setRefValue(_refWasCompleted, false);
    _setRefValue(_refWasOpacied, true);
  } else {
     if (completed < 0) {
       completed = 0;
     } else if (completed >= 100) {
       completed = 100;
       _setRefValue(_refWasCompleted, true)
     }
     _style = _crStyle(color, 1, completed+'%', T_WIDTH)
  }

  return (
    <div className={CL} style={_style} />
  );
};

export default ProgressLine
