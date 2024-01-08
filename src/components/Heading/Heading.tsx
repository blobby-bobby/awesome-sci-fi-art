import './styles.scss'
import { useTheme } from '../../contexts/ThemeContext';
import { useState } from 'react';
import logoTemp from "../../assets/favicon.png"

const Heading = () => {

  const { theme } = useTheme();
  const [expand, isExpanded] = useState<boolean>(true)

  return (
        <header>
          
          <div className={`head-block ${theme} ${expand ? "expand" : ""}`} onClick={() => isExpanded(!expand)}>

            <a href="#" className='head-block__icon'>
              <img src={logoTemp} height={30} alt="Awesome Scifi Art" />
            </a>

            <div className='head-block__drop'>
              <h1>Awesome<br /> Sci-Fi Art</h1>
              <p>Welcome to a selection of great sci-fi works where Artificial Intelligence have probably digged for those pictures we have all seen on the Internet quite recently. Guarantee made by humans.</p>
            </div>
          </div>
        </header>
  )
}

export default Heading