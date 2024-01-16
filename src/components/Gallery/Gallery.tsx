import { FunctionComponent, useEffect, useState } from "react";
import { GalleryItem } from "../GalleryItem/GalleryItem";
import data from "../../data/gallerydata.json";
import "./styles.scss";
import { useTheme } from "../../contexts/ThemeContext";
import { Artwork } from "../../types/types";
import { ImgModal } from "../ImgModal/ImgModal";
import { AnimatePresence } from 'framer-motion';

export const Gallery: FunctionComponent = () => {
  // Make the columns
  const columnSize = Math.ceil(data.length / 4);
  const columns = [
    data.slice(0, columnSize),
    data.slice(columnSize, columnSize * 2),
    data.slice(columnSize * 2, columnSize * 3),
  ];

  // Theme
  const { theme } = useTheme();

  // Scroll effect
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

  // Modal
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork>({author:"", id: 0, pathAuthor:"", pathImg:"", tags:[], title:"", year:""})
  const [isOpenModal, setIsOpenedModal] = useState<boolean>(false)

  const handleOpenModal = (artworkData: any) => {
    setSelectedArtwork(artworkData);
    setIsOpenedModal(true);
  }

  const handleCloseModal = () => {
    setSelectedArtwork({author: "", id: 0, pathAuthor:"", pathImg:"", tags:[], title:"", year:""});
    setIsOpenedModal(false);
  };

  const handleLazyLoad = (id: number) => {
    console.log("Image chargée :", id);
    // Peut-être ajoutez ici un traitement supplémentaire si nécessaire
  };

  return (
    <>
    <div className={`columns ${theme}`}>
        {columns.map((column, index) => (
          <div
            className="column"
            key={index}
          >
            <div className={`column__rail ${index % 2 === 1 ? "reversed" : ""}`}>
              {column.map((img) => (
                  <GalleryItem 
                    {...img} key={img.id} 
                    onClick={() => handleOpenModal(img)} 
                    onLoad={handleLazyLoad}
                    />
              ))}
            </div>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {selectedArtwork && isOpenModal && <ImgModal artwork={selectedArtwork} onClose={handleCloseModal} />}
      </AnimatePresence>
    </>
  );
};