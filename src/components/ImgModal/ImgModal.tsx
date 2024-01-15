import { FunctionComponent } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './styles.scss';
import { Artwork } from '../../types/types';
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { HiOutlineX } from 'react-icons/hi';

interface ImgModalProps {
  artwork: Artwork;
  onClose: () => void;
}

export const ImgModal: FunctionComponent<ImgModalProps> = (props) => {

  const { theme } = useTheme();

  return (
    <div className={`modal ${theme}`}>
            <div className='modal__close'>
                <div className='modal__close--button' onClick={props.onClose}>
                  <HiOutlineX size={24} />
                </div>
            </div>
            <div className='modal__container'>
            <div className='modal__container--image'>
              <img src={props.artwork.pathImg} alt="" loading="lazy" />
            </div>
            <div className="modal__container--text">
                <h2>{props.artwork.title}</h2>

                  <div className='infos__block'>
                    <span>Author</span>
                      <a href={props.artwork.pathAuthor} className='link' target="_blank" rel="noopener noreferrer">
                          <p>{props.artwork.author}</p> <HiMiniArrowUpRight size={20} />
                          <div className='underline'></div>
                      </a>
                  </div>

                  <div className='infos__block'>
                    <span>Year</span>
                    <p className='year'>{props.artwork.year}</p>
                  </div>
                
                <div className='tags'>                   
                    {props.artwork.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                      ))}
                </div>
            </div>
        </div>
    </div>
  )
}