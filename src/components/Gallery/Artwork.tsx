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
    <figure className='column__item'>
            
              <div className='overlay'>
                {/* Description */}
                <figcaption className='description'>
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