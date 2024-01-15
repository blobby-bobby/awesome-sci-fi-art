import './styles.scss'
import { useTheme } from '../../contexts/ThemeContext';
import { useState } from 'react';
import logoTemp from "../../assets/favicon.png"

export const Heading = () => {

  const { theme } = useTheme();
  const [expand, isExpanded] = useState<boolean>(false)

  return (
        <header>
          
          <div className={`head-block ${theme} ${expand ? "expand" : "collapse"}`} onClick={() => isExpanded(!expand)}>

              <img src={logoTemp} height={30} alt="Awesome Scifi Art" className='head-block__icon' />

            <div className='head-block__drop'>
              <h1>Awesome<br /> Sci-Fi Art</h1>
              <p>Welcome to a selection of great sci-fi works where Artificial Intelligence have probably digged for those pictures we have all seen on the Internet quite recently. Guarantee made by humans.</p>
            </div>
          </div>
        </header>
  )
}