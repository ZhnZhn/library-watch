import { useCallback } from '../uiApi';
import useToggle from '../hooks/useToggle';

const S_DATE_AGO = { color: 'gray' }
, S_DATE = {
  display: 'inline-block',
  color: 'black',
  marginLeft: 10
}
, S_INLINE_BLOCK = { display: 'inline-block' }
, S_NONE = { display: 'none' }

const DateAgo = ({
  isShowDate,
  style,
  dateAgo,
  date=''
}) => {
  const [isShow, toggleDateAgo] = useToggle(isShowDate)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hClick = useCallback(event => {
      event.stopPropagation()
      toggleDateAgo()
    }, [])
  // toggleDateAgo
  /*eslint-enable react-hooks/exhaustive-deps */
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
         onClick={date ? _hClick : void 0}
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
