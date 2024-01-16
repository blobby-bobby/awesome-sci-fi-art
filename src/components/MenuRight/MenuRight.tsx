import './styles.scss'
import { useTheme } from '../../contexts/ThemeContext';
import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import { Link } from '../Link/Link';

interface menuRightProps {
  isOpen: boolean,
  onClose: () => void,
}

export const MenuRight: FunctionComponent<menuRightProps> = (props) => {

  const { theme } = useTheme();

  const handleCopyClick = () => {
    navigator.clipboard.writeText('awesomescifigallery@gmail.com')
      .then(() => {
        console.log('Succesfully copied');
      })
      .catch((err) => {
        console.error('Error when adding to the clipboard:', err);
      });
  };

  // Animation
  const menuBarVars = {
    initial: { x: '100%', opacity: 1 },
    animate: { x: 0, opacity: 1, transition: { delay: 0.2, duration: 0.3, ease: [0.32, 0, 0.35, 0]}},
    exit: { x: '100%', opacity: 1, transition: { duration: 0.3, ease: [0.12, 0, 0.39, 1]}}
  }

  const menuFullScreenVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.2, ease: [0.12, 0, 0.39, 0]}},
    exit: { opacity: 0, transition: { delay: 0.3, duration: 0.2, ease: [0.12, 0, 0.39, 1]}}
  }

  return (
    <>
    <motion.div 
      className='menu-right' variants={menuFullScreenVars} 
      initial='initial' animate='animate' exit='exit'
      onClick={props.onClose}
      >
    </motion.div>

    <motion.div variants={menuBarVars} 
      initial='initial' animate='animate' exit='exit' 
      className={`menu-right__container ${theme}`}>
      <h2>Hey, want to help out on this gallery ?</h2>
      <p className='menu-right__container--text'>I curated this gallery myself, made my own search for real and awesome art, but sometimes, informations about the authors or their works are missing. So if you see mistakes or missing informations, please don't hesitate don't hesitate to drop a mail on the link below. Your suggestions on artists or works you would like to see on this gallery are also welcome.</p>

      <Link linkPath='awesomescifigallery@gmail.com' linkTitle='Send a mail' onClick={handleCopyClick} />
    </motion.div>
    </>
  )
}