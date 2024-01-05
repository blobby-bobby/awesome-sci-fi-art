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
              <div className='img-wrap__overlay'>
                <div className='description'>

                <div>
                  <p>{props.title}</p>
                  <address className="author">{props.author}</address>
                </div>

                <p>{props.year}</p>
                </div>
              </div>
              <img src={props.pathImg} alt={props.title} />
            </div>

              
    </>
  )
}

export default Artwork