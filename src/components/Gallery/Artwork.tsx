import { FunctionComponent } from 'react'
import "./styles.scss"

interface ArtworkProps {
    title: string,
    author: string,
    year: string,
    pathImg: string,
}

const Artwork: FunctionComponent<ArtworkProps> = (props) => {
  return (
    <figure className='gall-item'>
            
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

export default Artwork