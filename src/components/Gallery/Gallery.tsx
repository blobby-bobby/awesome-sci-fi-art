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
    <div className="column" key={index}>
      {column.map((img) => (
          <Artwork {...img} key={img.id} />
      ))}
    </div>
  ))}
  </section>
  )
}

export default Gallery