import React from 'react';

const LinkImg = (props) => {
  const { href, imgClass, imgSrc, onError } = props
      , _onError = (onError) ? onError : _handlerError

  const _handlerError = (event) => {
     console.log("Failed to load image with src: " + imgSrc);     
  };

  return (
    <a href={href}>
       <img
          onError={_onError}
          className={imgClass}
          src={imgSrc}
       />
    </a>
  )
};

export default LinkImg
