import { FunctionComponent } from 'react'

interface ArtworkProps {
    title: string,
    author: string,
    year: string,
    pathImg: string
}

const Artwork: FunctionComponent<ArtworkProps> = (props) => {
  return (
    <>
            <div className='img-wrap'>
              <img src={props.pathImg} alt={props.title} />
            </div>

            <div className='description'>

              <div>
                <p>{props.title}</p>
                <address className="author">{props.author}</address>
              </div>
              
              
              <p>{props.year}</p>
            </div>

              
    </>
  )
}

export default Artwork