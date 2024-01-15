import { FunctionComponent } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './styles.scss';
import { Artwork } from '../../types/types';
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { HiOutlineX } from 'react-icons/hi';
import { motion } from 'framer-motion';

interface ImgModalProps {
  artwork: Artwork;
  onClose: () => void;
}

export const ImgModal: FunctionComponent<ImgModalProps> = (props) => {

  const { theme } = useTheme();

  // Full modal transition
  const modalVars = {
    initial: { y: '100%', opacity: 1 },
    animate: { y: '0%', opacity: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.1, 0] } },
    exit: { y: '-100%', opacity: 1, transition: { delay: 0.8, duration: 0.4, ease: [0.4, 0, 0.1, 0]}}
  }

  const imgVars = {
    initial: { x: '-40%', opacity: 0, rotate: -20 },
    animate: { x: '0%', opacity: 1, rotate: -6, transition: { duration: 0.5, delay: 0.3, ease: [0.4, 0, 0.1, 0] }},
    exit: { x: '-20%', opacity: 0, rotate: -10, transition: { delay: 0.1, duration: 0.4, ease: [0.4, 0, 0.1, 0] }}
  }

  // Stagger animation links
  const textsStagger = {
    initial: { transition: { staggerChildren: 0.2, staggerDirection: -1 }},
    animate: { transition: { delayChildren: 0.4, staggerChildren: 0.2, staggerDirection: 1,  }},
  }

  // Links animations
  const textsVars = { 
    initial: { x: "-2vh", opacity: 0 },
    animate: { x: 0, opacity: 1 }
  }    

  return (
      <motion.div className={`modal ${theme}`} variants={modalVars} initial='initial' animate='animate' exit='exit'>
              <div className='modal__close'>
                  <div className='modal__close--button' onClick={props.onClose}>
                    <HiOutlineX size={24} />
                  </div>
              </div>
              <div className='modal__container'>
              <motion.div className='modal__container--image' variants={imgVars} initial='initial' animate='animate' exit='exit'>
                <img src={props.artwork.pathImg} alt="" loading="lazy" />
              </motion.div>
              <motion.div className="modal__container--text" variants={textsStagger} initial="initial" animate='animate' exit="initial">
                  <motion.h2 variants={textsVars}>{props.artwork.title}</motion.h2>
                    <motion.div className='infos__block' variants={textsVars}>
                      <span>Author</span>
                        <a href={props.artwork.pathAuthor} className='link' target="_blank" rel="noopener noreferrer">
                            <p>{props.artwork.author}</p> <HiMiniArrowUpRight size={20} />
                            <div className='underline'></div>
                        </a>
                    </motion.div>

                    <motion.div className='infos__block' variants={textsVars}>
                      <span>Year</span>
                      <p className='year'>{props.artwork.year}</p>
                    </motion.div>
                  
                    <motion.div className='tags' variants={textsVars}>                   
                        {props.artwork.tags.map((tag, i) => (
                          <span key={i}>{tag}</span>
                          ))}
                    </motion.div>
              </motion.div>
          </div>
      </motion.div>
  )
}