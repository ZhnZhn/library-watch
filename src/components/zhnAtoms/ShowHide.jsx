import React from 'react';

const SHOW_POPUP = "show-popup"
    , STYLES = {
        SHOW : {
          display: 'block'
        },
        HIDE : {
          display : 'none'
        }
};

const ShowHide = (props) => {
    const {isShow, style, children} = props
        , _styleShow = isShow ? STYLES.SHOW : STYLES.HIDE
        , _classShow = isShow ? SHOW_POPUP : null;

    return (
      <div className={_classShow} style={Object.assign({}, style, _styleShow)}>
        {children}
      </div>
    )
};

export default ShowHide
