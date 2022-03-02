import { useState } from '../uiApi';
import useListen from '../hooks/useListen';

const CL = "hrz-container";

const ComponentHrzContainer = ({
  store,
  initShowAction
}) => {
  const [comps, setComps] = useState([]);

  useListen(store, (actionType, Comp) => {
    if (actionType === initShowAction && Comp){
      setComps(prevComps => [Comp, ...prevComps])
    }
  })

  return (
    <div className={CL}>
       {comps}
    </div>
  );
};

export default ComponentHrzContainer
