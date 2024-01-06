import Gallery from "./components/Gallery/Gallery"
import Heading from "./components/Heading/Heading"
import { HiOutlineLightBulb, HiOutlineInformationCircle } from "react-icons/hi";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'));
  };

  return (
      <div className={`app ${theme}`}>
        <div className={`nav-block ${theme}`} onClick={toggleTheme}><HiOutlineLightBulb size={24} /></div>
        <div className={`nav-block ${theme} right`}><HiOutlineInformationCircle size={24} /></div>

        <Heading />
        
        <div className={`nav-block ${theme} bottom share`}>Share: 
          <a><FaTwitter /></a>
          <a><FaLinkedin /></a>
        </div>
        <a href="https://github.com/blobby-bobby" target="_blank" rel="noopener noreferrer">
          <div className={`nav-block ${theme} bottom right`}>Made by <em>Bulle</em></div>
        </a>

        <Gallery />
      </div>
  )
}

export default App
