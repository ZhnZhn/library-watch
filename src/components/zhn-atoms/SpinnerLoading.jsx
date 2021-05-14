const S = {
  SPINNER_LOADING : {
    position: 'absolute',
    display: 'inline-block',
    width: 20,
    height: 20
  }
};

const SpinnerLoading = ({ style }) => (
  <span
     style={{...S.SPINNER_LOADING, ...style}}
     data-loader="circle"
   />
);

export default SpinnerLoading
