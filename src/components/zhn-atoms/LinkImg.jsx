import React from 'react';

//import PropTypes from "prop-types";

const _onError = (imgSrc, event) => {
  console.log("Failed to load image with src: " + imgSrc);
}

const LinkImg = ({
  alt='',
  href,
  imgClass,
  imgSrc,
  onError=_onError
}) => (
  <a href={href}>
     <img
        alt={alt}
        className={imgClass}
        src={imgSrc}
        onError={onError.bind(null, imgSrc)}
     />
  </a>
);

/*
LinkImg.propTypes = {
  alt: PropTypes.string,
  href: PropTypes.string,
  imgClass: PropTypes.string,
  imgSrc: PropTypes.string,
  onError: PropTypes.func
}
*/


export default LinkImg
