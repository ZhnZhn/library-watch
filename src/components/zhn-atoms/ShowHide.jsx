const CL_SHOW_POPUP = "show-popup"
, S_SHOW = { display: 'block' }
, S_HIDE = { display: 'none' };

const ShowHide = ({
  isShow,
  style,
  className='',
  children
}) => {
    const _style = isShow ? S_SHOW : S_HIDE
    , _className = isShow
        ? `${className} ${CL_SHOW_POPUP}`
        : null;

    return (
      <div
         className={_className}
         style={{ ...style, ..._style }}
        >
        {children}
      </div>
    );
};

export default ShowHide
