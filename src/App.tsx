import Gallery from "./components/Gallery/Gallery"
import Heading from "./components/Heading/Heading"
import { HiOutlineSun, HiOutlineInformationCircle, HiOutlineSparkles, HiOutlineX } from "react-icons/hi";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { useTheme } from "./contexts/ThemeContext";
import MenuRight from "./components/MenuRight/MenuRight";
import { useState } from "react";

function App() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'));
  };

  const [IsOpenMenu, setIsOpenMenu] = useState<boolean>(false)

  return (
      <div>
        {/* Theme button */}
        <div className={`nav-block ${theme}`} onClick={toggleTheme}>
          {theme === 'dark' ? <HiOutlineSun size={24} /> : <HiOutlineSparkles size={24} /> }
        </div>

        {/* Heading dropdown button */}
        <Heading />

        {/* Menu button */}
        <div className={`nav-block ${theme} right menu`} onClick={() => setIsOpenMenu(!IsOpenMenu)}>
          {IsOpenMenu ? <HiOutlineX size={24} /> : <HiOutlineInformationCircle size={24} />}
        </div>
        {IsOpenMenu ? <MenuRight /> : ""}
        
        {/* Share button */}
        <div className={`nav-block ${theme} bottom share`}>Share: 
          <a href="https://github.com/blobby-bobby" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://github.com/blobby-bobby" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>

        {/* Author button */}
        <a href="https://github.com/blobby-bobby" target="_blank" rel="noopener noreferrer">
          <div className={`nav-block ${theme} bottom right`}>Made by <em>Bulle</em></div>
        </a>

        <Gallery />
      </div>
  )
}

export default App
