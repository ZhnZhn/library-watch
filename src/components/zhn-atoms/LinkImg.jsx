import Link from './Link';
import Img from './Img';

const LinkImg = ({
  alt,
  href,
  imgClass,
  imgSrc
}) => (
  <Link href={href}>
     <Img
       alt={alt}
       className={imgClass}
       src={imgSrc}
     />
  </Link>
);

export default LinkImg
