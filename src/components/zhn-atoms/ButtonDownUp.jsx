//import PropTypes from "prop-types";

import STYLE from './ButtonDownUp.Style';

import SpinnerLoading from './SpinnerLoading';

const _crStateComp = (isUp, isLoading) => {
  let _spinner = null;
  if (isLoading) {
    _spinner = <SpinnerLoading style={STYLE.SPINNER} />
  }
  const _circleStyle = isLoading
    ? STYLE.CIRCLE_LOADING
    : isUp ? STYLE.CIRCLE_UP : STYLE.CIRCLE_DOWN;
  return (
    <>
      {_spinner}
      <span style={{...STYLE.CIRCLE, ..._circleStyle}} />
    </>
  );
};

const ButtonDownUp = ({
  style, isUp,
  isLoading,
  caption='', title='',
  onClick
}) => {
   const _style = isUp ? STYLE.ROOT_UP : STYLE.ROOT_DOWN;

   return (
     <button
        title={title}
        style={{...STYLE.ROOT, ...style, ..._style}}
        onClick={onClick}
     >
       {_crStateComp(isUp, isLoading)}
       <span style={STYLE.ITEM}>
          {caption}
       </span>
    </button>
   );
}

/*
ButtonDownUp.propTypes = {
  style: PropTypes.object,
  isUp: PropTypes.bool,
  isLoading: PropTypes.bool,
  caption: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func
}
*/


export default ButtonDownUp
