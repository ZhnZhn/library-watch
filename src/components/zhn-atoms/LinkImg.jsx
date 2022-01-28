
const _onError = (imgSrc, event) => {
  console.log("Failed to load image with src: " + imgSrc);
};

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

export default LinkImg
