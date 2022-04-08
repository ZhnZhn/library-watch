import {
  useRef,
  useEffect,
  getRefValue,
  setRefValue
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
});

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
    if (getRefValue(_refWasCompleted)){
      setRefValue(_refIdCompleted, setTimeout(_rerenderComp, TM_PERIOD))
    } else if (getRefValue(_refWasOpacied)){
      setRefValue(_refIdOpacied, setTimeout(_rerenderComp, TM_PERIOD))
    }
  })

  useEffect(()=>{
    return () => {
      clearTimeout(getRefValue(_refIdCompleted))
      clearTimeout(getRefValue(_refIdOpacied))
    }
  }, [])

  let _style;

  if (getRefValue(_refWasOpacied)) {
    _style = _crStyle(color, 1, 0)
    setRefValue(_refWasOpacied, false);
  } else if (getRefValue(_refWasCompleted)) {
    _style = _crStyle(color, 0, '100%', T_OPACITY)
    setRefValue(_refWasCompleted, false);
    setRefValue(_refWasOpacied, true);
  } else {
     if (completed < 0) {
       completed = 0;
     } else if (completed >= 100) {
       completed = 100;
       setRefValue(_refWasCompleted, true)
     }
     _style = _crStyle(color, 1, completed+'%', T_WIDTH)
  }

  return (
    <div className={CL} style={_style} />
  );
};

export default ProgressLine
