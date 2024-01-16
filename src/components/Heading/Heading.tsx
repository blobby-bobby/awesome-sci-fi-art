import './styles.scss'
import { useTheme } from '../../contexts/ThemeContext';
import { useState, useEffect } from 'react';
import logoTemp from "../../assets/favicon.png"

export const Heading = () => {

  const { theme } = useTheme();
  const [expanded, setIsExpanded] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0) setIsExpanded(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
        <header>
          
          <div className={`head-block ${theme} ${expanded ? "expand" : "collapse"}`} onClick={() => setIsExpanded(!expanded)}>

              <img src={logoTemp} height={30} alt="Awesome Scifi Art" className='head-block__icon' />

            <div className='head-block__drop'>
              <h1>Awesome<br /> Sci-Fi Art</h1>
              <p>Welcome to a selection of great sci-fi works where Artificial Intelligence have probably digged for those pictures we have all seen on the Internet quite recently. Guarantee made by humans.</p>
            </div>
          </div>
        </header>
  )
}