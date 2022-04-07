import { useMemo } from '../uiApi';
import useRefInit from '../hooks/useRefInit';
import ResizeElementImpl from './ResizeElementImpl';

import has from '../has';

const { HAS_TOUCH } = has;

const useResizeElement = props => {
   const _resizeImpl = useRefInit(() => {
     return new ResizeElementImpl(props);
   })[0];
   /*eslint-disable react-hooks/exhaustive-deps */
   return useMemo(() => {
     const [
       _onStartResizePropName,
       _onStopResizePropName
     ] = HAS_TOUCH ? [
       'onTouchStart',
       'onTouchEnd'
     ] : [
       'onMouseDown',
       'onMouseUp'
     ], {
       onStopRezise,
       onStartResizeLeft,
       onStartResizeRight
     } = _resizeImpl;

     return [
       //leftBtHandlers
       {
         [_onStartResizePropName]: onStartResizeLeft,
         [_onStopResizePropName]: onStopRezise
       },
       //rightBtHandlers
       {
         [_onStartResizePropName]: onStartResizeRight,
         [_onStopResizePropName]: onStopRezise
       }
     ];
   }, [])
   // _resizeImpl
   /*eslint-enable react-hooks/exhaustive-deps */
 };

 export default useResizeElement
