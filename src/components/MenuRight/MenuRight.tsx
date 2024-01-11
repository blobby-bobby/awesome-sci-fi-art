import './styles.scss'
import { useTheme } from '../../contexts/ThemeContext';
import { FunctionComponent } from 'react';

const MenuRight: FunctionComponent = () => {

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

  return (
    <div className='menu-right'>
      <div className={`menu-right__container ${theme}`}>

        <h2>So you know...</h2>
        <p>
        This gallery is not for profit purpose, but to encourage discovery of unique artworks, and to strenghten frontend skills. Please, keep in mind that those pictures are probably under copyright license. If you use them on your blog, social media or whatever, don't forget to credit the authors.
        </p>

        <hr />
        <h2>Oh... and... one more thing =)</h2>
        <p>I curated this gallery myself, and sometimes, informations about the authors are missing. So if you see mistakes or missing informations, please don't hesitate don't hesitate to drop a mail here. Your suggestions on the artists or works to add on this gallery are also welcome.</p>

        <button onClick={handleCopyClick}>
          Copy Email
        </button>
      </div>
    </div>
  )
}

export default MenuRight