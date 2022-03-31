import A from '../zhn-atoms/A';

const S_BTN_CIRCLE = {
  position: 'relative',
  top: -6,
  marginLeft: 10
};

const ButtonWatch = ({
  onClick
}) => (
  <A.ButtonCircle
     style={S_BTN_CIRCLE}
     caption="W"
     title="Add to WatchList"
     onClick={onClick}
   />
);


export default ButtonWatch
