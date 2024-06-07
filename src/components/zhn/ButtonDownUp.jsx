//import PropTypes from "prop-types";
import SpinnerLoading from './SpinnerLoading';

const S_ROOT = {
  position: 'relative',
  display: 'inline-block',
  height: 36,
  border: '1px solid',
  borderRadius: 10
}
, S_BT_UP = {
  color: '#a487d4',
  borderColor: '#a487d4',
  borderWidth: 2,
  fontWeight: 'bold'
}
, S_BT_DOWN = {
  color: 'grey',
  borderColor: 'grey',
  borderWidth: 1,
  fontWeight: 'normal'
}
, S_ITEM = {
  display: 'inline-block',
  padding: '0 8px 0 5px'
}
, S_CIRCLE = {
  display: 'inline-block',
  marginLeft: 8,
  backgroundColor: 'grey',
  width: 12,
  height: 12,
  border: '1px solid grey',
  borderRadius: '50%'
}
, S_CIRCLE_LOADING = {
  backgroundColor: 'transparent',
  border: 'none'
}
, S_CIRCLE_UP = {
  backgroundColor: '#a487d4',
  borderColor: '#a487d4'
}
, S_CIRCLE_DOWN = {
  backgroundColor: 'grey',
  borderColor: 'grey'
}
, S_SPINNER = {
  top: 5,
  left: 2
};

const _crStateEl = (
  isUp,
  isLoading
) => {
  let _spinner = null;
  if (isLoading) {
    _spinner = <SpinnerLoading style={S_SPINNER} />
  }
  const _circleStyle = isLoading
    ? S_CIRCLE_LOADING
    : isUp ? S_CIRCLE_UP : S_CIRCLE_DOWN;
  return (
    <>
      {_spinner}
      <span style={{...S_CIRCLE, ..._circleStyle}} />
    </>
  );
};

const ButtonDownUp = ({
  style,
  isUp,
  isLoading,
  caption='',
  title='',
  onClick
}) => {
   const _style = isUp
     ? S_BT_UP
     : S_BT_DOWN;

   return (
     <button
        type="button"
        title={title}
        style={{...S_ROOT, ...style, ..._style}}
        onClick={onClick}
     >
       {_crStateEl(isUp, isLoading)}
       <span style={S_ITEM}>
          {caption}
       </span>
    </button>
   );
};

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
