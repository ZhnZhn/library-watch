import useBool from './useBool';
import useKeyEscape from './useKeyEscape';

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
