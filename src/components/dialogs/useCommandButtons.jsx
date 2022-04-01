import useRefInit from '../hooks/useRefInit';
import FlatButton from '../zhn-m/FlatButton';

const useCommandButtons = (
  onLoad
) => useRefInit(() => [
  <FlatButton
    key="load"
    isPrimary={true}
    caption="Load"
    onClick={onLoad}
  />
])[0];

export default useCommandButtons
