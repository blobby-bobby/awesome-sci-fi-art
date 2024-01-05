import Gallery from "./components/Gallery/Gallery"
import Heading from "./components/Heading/Heading"
import { HiOutlineLightBulb, HiOutlineInformationCircle } from "react-icons/hi";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

function App() {

  return (
    <>
      <div className="nav-block"><HiOutlineLightBulb size={24} /></div>
      <div className="nav-block right"><HiOutlineInformationCircle size={24} /></div>

      <Heading />
      
      
      <div className="nav-block bottom share">Share: 
        <a><FaTwitter /></a>
        <a><FaLinkedin /></a>
      </div>
      <div className="nav-block bottom right">Made by <a href="https://github.com/blobby-bobby" target="_blank" rel="noopener noreferrer">Bulle</a></div>

      <Gallery />


      {/* <section>
        <p className="intentions">This gallery is not for profit purpose, but to encourage discovery of unique artworks. Please, keep in mind that those pictures are copyrighted, or under license. If you use them on your blog, social media or whatever, be kind, credit the authors.</p>
      </section> */}
    </>
  )
}

export default App
