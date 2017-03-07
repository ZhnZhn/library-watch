import React, { PropTypes } from 'react';

const SHOW_POPUP = "show-popup"
    , STYLE = {
        SHOW : {
          display: 'block'
        },
        HIDE : {
          display : 'none'
        }
};

const ShowHide = ({ isShow, style, children }) => {
    const _style = isShow ? STYLE.SHOW : STYLE.HIDE
        , _class = isShow ? SHOW_POPUP : null;

    return (
      <div className={_class} style={{ ...style, ..._style }}>
        {children}
      </div>
    )
};

ShowHide.propTypes = {
  isShow: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default ShowHide
