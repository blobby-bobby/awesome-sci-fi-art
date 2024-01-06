import './styles.scss'
import { useTheme } from '../../contexts/ThemeContext';

const Heading = () => {

  const { theme } = useTheme();

  return (
        <header className={`head-block ${theme}`}>
          <a href="#">⚇</a>

          <h1>Awesome<br /> Sci-Fi Art</h1>
          <p>Welcome to a selection of great sci-fi works where Artificial Intelligence have probably digged for those pictures we have all seen on the Internet quite recently. Guarantee made by humans.</p>
        </header>
  )
}

export default Heading