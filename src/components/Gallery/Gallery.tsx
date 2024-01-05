import { FunctionComponent } from "react"
import Artwork from "./Artwork"
import data from "../../data/gallerydata.json"
import "./styles.scss"

const Gallery: FunctionComponent = () => {

    const columnSize = Math.ceil(data.length / 4);
    const columns = [
        data.slice(0, columnSize),
        data.slice(columnSize, columnSize * 2),
        data.slice(columnSize * 2, columnSize * 3),
        data.slice(columnSize * 3),
    
    ];

  return (
    <section className="gallery">
        
    {columns.map((column, index) => (
    <div className="gallery__col" key={index}>
      {column.map((img) => (
        <div className="gallery__col--item" key={img.id}>
          <Artwork {...img} />
          </div>
      ))}
    </div>
  ))}
  </section>
  )
}

export default Gallery