import useToggle from '../hooks/useToggle';
import {
  S_INLINE_BLOCK,
  S_NONE
} from '../styles/CL';

const S_DATE_AGO = {
  color: 'gray'
}
, S_DATE = {
  ...S_INLINE_BLOCK,
  color: 'black',
  marginLeft: 10
};

const DateAgo = ({
  isShowDate,
  style,
  dateAgo,
  date=''
}) => {
  const [
    isShow,
    toggleDateAgo
  ] = useToggle(isShowDate, true)
  , _styleDate = isShow
      ? S_INLINE_BLOCK
      : S_NONE;

  return (
    <span>
      {/*eslint-disable jsx-a11y/click-events-have-key-events*/}
      <span
         role="button"
         tabIndex="-1"
         style={{...S_DATE_AGO, ...style}}
         onClick={date ? toggleDateAgo : void 0}
      >
        {dateAgo}
      </span>
      {/*eslint-enable jsx-a11y/click-events-have-key-events*/}
      <span style={{...S_DATE, ..._styleDate}}>
         {date}
      </span>
    </span>
  );
};

export default DateAgo
