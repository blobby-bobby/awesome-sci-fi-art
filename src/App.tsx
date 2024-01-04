import Gallery from "./components/Gallery/Gallery"

function App() {

  return (
    <>
      <nav className="navtop">
        <button>Light up</button>
        <a href="#">⚇</a>
        <button>Info</button>
      </nav>

      <header>
        <h1>Awesome<br /> Sci-Fi Art</h1>
        <p>Welcome to a selection of great sci-fi works where Artificial Intelligence have probably digged for those pictures we have all seen on the Internet quite recently. Guarantee made by humans.</p>
      </header>

      <nav className="navtop">
        <div>Share</div>
        <a>Source code</a>
      </nav>

      <Gallery />


      <p>This gallery is not for profit purpose, but to encourage discovery of unique artworks. Please, keep in mind that those pictures are copyrighted, or under license. If you use them on your blog, social media or whatever, be kind, credit the authors.</p>
    </>
  )
}

export default App
