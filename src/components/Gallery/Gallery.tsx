import { FunctionComponent, useEffect } from "react";
import Artwork from "./Artwork";
import data from "../../data/gallerydata.json";
import "./styles.scss";
import { useTheme } from "../../contexts/ThemeContext";

const Gallery: FunctionComponent = () => {
  // Make the columns
  const columnSize = Math.ceil(data.length / 3);
  const columns = [
    data.slice(0, columnSize),
    data.slice(columnSize, columnSize * 2),
    data.slice(columnSize * 2),
  ];
  

  // Theme
  const { theme } = useTheme();

  // Scroll effect
  useEffect(() => { }, []);

  return (
    <main className={`${theme}`}>
        {columns.map((column, index) => (
          <div
            className={`column ${index % 2 === 1 ? "reversed" : ""}`}
            key={index}
            
          >
            {column.map((img) => (
              <Artwork {...img} key={img.id} />
            ))}
          </div>
        ))}
    </main>
  );
};

export default Gallery;