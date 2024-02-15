import { HAS_TOUCH_EVENTS } from '../../has';

const crImgToken = (
  letter,
  label,
  codes
) => HAS_TOUCH_EVENTS
 ? letter : (
   <span role="img" arial-label={label}>
     {String.fromCharCode(...codes)}
   </span>
 );

 export default crImgToken
