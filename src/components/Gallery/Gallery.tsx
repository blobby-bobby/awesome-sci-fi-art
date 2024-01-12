import { FunctionComponent, useEffect } from "react";
import Artwork from "./Artwork";
import data from "../../data/gallerydata.json";
import "./styles.scss";
import { useTheme } from "../../contexts/ThemeContext";
// import ImgModal from "../ImgModal/ImgModal";

const Gallery: FunctionComponent = () => {
  // Make the columns
  const columnSize = Math.ceil(data.length / 4);
  const columns = [
    data.slice(0, columnSize),
    data.slice(columnSize, columnSize * 2),
    data.slice(columnSize * 2, columnSize * 3),
  ];

  // Theme
  const { theme } = useTheme();

  const updatePositions = (scrollPos:number)=>{
    const col = document.getElementsByClassName('column__rail') as HTMLCollectionOf<HTMLElement>;
    
    for(let i = 0; i < col.length; i++){
      if (i % 2 === 0) {
        col[i].style.bottom = scrollPos+"px";
      } else {
        col[i].style.top = scrollPos+"px";
      }
    }
  }

  const handleScroll = () => {
    if(document.documentElement.clientWidth > 576) {
      updatePositions(-window.scrollY);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <>
    <div className={`columns ${theme}`}>
        {columns.map((column, index) => (
          <div
            className="column"
            key={index}
          >
            <div className="column__rail">
              {column.map((img) => (
                  <Artwork {...img} key={img.id} />
              ))}
            </div>
          </div>
        ))}
    </div>
    {/* <ImgModal /> */}
    </>
  );
};

export default Gallery;