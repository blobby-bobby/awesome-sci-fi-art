import { Gallery } from "./components/Gallery/Gallery"
import { Heading } from "./components/Heading/Heading"
import { HiOutlineSun, HiOutlineInformationCircle, HiOutlineSparkles, HiOutlineX } from "react-icons/hi";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { useTheme } from "./contexts/ThemeContext";
import { MenuRight } from "./components/MenuRight/MenuRight";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'));
  };

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  const closeMenu = () => { setIsOpenMenu(false) }

  return (
      <>
        {/* Theme button */}
        <div className={`nav-block ${theme}`} onClick={toggleTheme}>
          {theme === 'dark' ? <HiOutlineSun size={24} /> : <HiOutlineSparkles size={24} /> }
        </div>

        {/* Heading dropdown button */}
        <Heading />

        {/* Menu button */}
        <div className={`nav-block ${theme} right menu`} onClick={() => setIsOpenMenu(!isOpenMenu)}>
          {isOpenMenu ? <HiOutlineX size={24} /> : <HiOutlineInformationCircle size={24} />}
        </div>
        <AnimatePresence>
          {isOpenMenu && <MenuRight isOpen={isOpenMenu} onClose={closeMenu} />}
        </AnimatePresence>
        
        {/* Share button */}
        <div className={`nav-block ${theme} bottom share`}>Share: 
          <a href="https://www.facebook.com/sharer/sharer.php?u=<URL>" 
                target='_blank' rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://twitter.com/share?url=<URL>" 
                target='_blank' rel="noopener noreferrer"><FaLinkedin /></a>
        </div>

        {/* Author button */}
        <a href="https://github.com/blobby-bobby" target="_blank" rel="noopener noreferrer">
          <div className={`nav-block ${theme} bottom right`}>Made by <em>Bulle</em></div>
        </a>

        <Gallery />
      </>
  )
}

export default App
