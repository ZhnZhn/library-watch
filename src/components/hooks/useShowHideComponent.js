import useBool from './useBool';
import { useKeyEscape } from './fUseKey';

const useShowHideComponent = (
  isShowInitial
) => {
  const [
     isShowComp,
     showComp,
     hideComp
   ] = useBool(isShowInitial);
   return [
     isShowComp,
     showComp,
     hideComp,
     useKeyEscape(hideComp)
   ]
}

export default useShowHideComponent
