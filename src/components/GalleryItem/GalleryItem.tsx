import { FunctionComponent } from 'react'
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
}

export const GalleryItem: FunctionComponent<ArtworkProps> = (props) => {
  return (
    <figure className='gall-item' onClick={props.onClick}>
              <div className='overlay'>
                {/* Description */}
                <figcaption>
                  <div>
                    <p>{props.title}</p>
                    <address className="author">{props.author}</address>
                  
                {/* MORE BUTTON */}
                  </div>

                  <p>{props.year}</p>
                </figcaption>
              </div>
              <img src={props.pathImg} alt={props.title} />              
    </figure>
  )
}