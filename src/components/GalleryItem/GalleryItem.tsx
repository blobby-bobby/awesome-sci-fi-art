import { FunctionComponent, useState } from 'react'
import "./styles.scss"
import { Artwork } from '../../types/types';

interface ArtworkProps {
  artwork: Artwork;
  onClick: () => void;
  onLoad: (id: number) => void;
}

export const GalleryItem: FunctionComponent<ArtworkProps> = (props) => {

  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    props.onLoad(props.artwork.id);
  };

  return (
      <figure className='gall-item' onClick={props.onClick}>
        <div className='overlay'>
          {/* Description */}
          <figcaption>
            <div>
              <p>{props.artwork.title}</p>
              <address className="author">{props.artwork.author}</address>
            </div>

            <p>{props.artwork.year}</p>
          </figcaption>
        </div>
        <img 
          className={`${imageLoaded ? '' : 'loading'}`}
          src={props.artwork.pathImg} 
          alt={props.artwork.title}
          onLoad={handleImageLoad}
          width="300" height="300"
        />
      </figure>
  )
}