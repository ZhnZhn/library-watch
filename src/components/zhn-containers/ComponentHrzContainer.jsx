import { useState } from '../uiApi';
import { useMsItem } from '../../flux/itemStore';

const CL = "hrz-container";

const ComponentHrzContainer = () => {
  const [
    comps,
    setComps
  ] = useState([]);

  useMsItem(msItem => {
    if (msItem && msItem.Comp) {
      setComps(prevComps => [
        msItem.Comp,
        ...prevComps
      ])
    }
  })

  return (
    <div className={CL}>
       {comps}
    </div>
  );
};

export default ComponentHrzContainer
