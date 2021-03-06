import { Link } from 'react-router-dom';

import './ImageLink.css';

import generateSrcset from '../../utils/srcset';

function ImageLink({ imageSrcmap, imageUrl, link, title }) {
  return (
    <div className="image-selection">
      <Link className="image-link" to={link} />
      <img
        src={imageUrl}
        srcSet={generateSrcset(imageSrcmap)}
        sizes="(min-width: 760px) and (orientation: landscape) 50vw, 100vw"
      />
      <h3>{title}</h3>
    </div>
  );
}

export default ImageLink;
