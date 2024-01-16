import { FunctionComponent, useState } from 'react'
import "./styles.scss"

interface ArtworkProps {
  id: number;
  title: string;
  author: string;
  year: string;
  pathImg: string;
  pathAuthor: string;
  tags: string[];
  onClick: () => void;
  onLoad: (id: number) => void;
}

export const GalleryItem: FunctionComponent<ArtworkProps> = (props) => {

  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    props.onLoad(props.id);
  };

  return (
      <figure className='gall-item' onClick={props.onClick}>
        <div className='overlay'>
          {/* Description */}
          <figcaption>
            <div>
              <p>{props.title}</p>
              <address className="author">{props.author}</address>
            </div>

            <p>{props.year}</p>
          </figcaption>
        </div>
        <img 
          className={`${imageLoaded ? '' : 'loading'}`}
          src={props.pathImg} 
          alt={props.title}
          onLoad={handleImageLoad}
          width="300" height="300"
        />
      </figure>
  )
}