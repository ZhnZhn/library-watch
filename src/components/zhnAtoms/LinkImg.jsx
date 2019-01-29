import React from 'react';

//import PropTypes from "prop-types";

const LinkImg = ({ href, imgClass, imgSrc, onError }) => (
  <a href={href}>
     <img
        className={imgClass}
        src={imgSrc}
        onError={onError.bind(null, imgSrc)}
     />
  </a>
);

/*
LinkImg.propTypes = {
  href: PropTypes.string,
  imgClass: PropTypes.string,
  imgSrc: PropTypes.string,
  onError: PropTypes.func
}
*/
LinkImg.defaultProps = {
  onError: (imgSrc, event) => {
     console.log("Failed to load image with src: " + imgSrc);
  }
}

export default LinkImg
