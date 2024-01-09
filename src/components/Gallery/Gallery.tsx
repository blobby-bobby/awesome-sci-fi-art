import { FunctionComponent, useEffect } from "react";
import Artwork from "./Artwork";
import data from "../../data/gallerydata.json";
import "./styles.scss";
import { useTheme } from "../../contexts/ThemeContext";

const Gallery: FunctionComponent = () => {
  // 4 columns
  const columnSize = Math.ceil(data.length / 4);
  const columns = [
    data.slice(0, columnSize),
    data.slice(columnSize, columnSize * 2),
    data.slice(columnSize * 2, columnSize * 3),
    data.slice(columnSize * 3),
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