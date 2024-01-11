import './styles.scss'
import { useTheme } from '../../contexts/ThemeContext';

const MenuRight = () => {

  const { theme } = useTheme();

  return (
    <div className='menu-right'>
      <div className={`menu-right__container ${theme}`}>

        <h2>So you know ...</h2>
        <p>
        This gallery is not for profit purpose, but to encourage discovery of unique artworks. Please, keep in mind that those pictures are copyrighted, or under license. If you use them on your blog, social media or whatever, don't forget to credit the authors.
        </p>

        <hr />
        <h2>Oh... and... one more thing =)</h2>
        <p>I curated this gallery myself, and sometimes, informations about the authors are missing. So if you see mistakes or missing informations, please don't hesitate don't hesitate to drop a mail here. Your suggestions on the artists or works to add on this gallery are also welcome.</p>
      </div>
    </div>
  )
}

export default MenuRight