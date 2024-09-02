import ButtonCircle from '../../zhn/ButtonCircle';

const S_BTN_CIRCLE = {
  position: 'relative',
  top: -2,
  marginLeft: 10
};

const ButtonWatch = ({
  onClick
}) => (
  <ButtonCircle
     style={S_BTN_CIRCLE}
     caption="W"
     title="Add to WatchList"
     onClick={onClick}
   />
);

export default ButtonWatch
