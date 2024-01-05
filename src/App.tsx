import Gallery from "./components/Gallery/Gallery"

function App() {

  return (
    <>
      <nav className="navtop">
        <div className="nav-block">Light up</div>
        <a href="#">⚇</a>
        <div className="nav-block">Info</div>
      </nav>

      <header>
        <h1>Awesome<br /> Sci-Fi Art</h1>
        <p>Welcome to a selection of great sci-fi works where Artificial Intelligence have probably digged for those pictures we have all seen on the Internet quite recently. Guarantee made by humans.</p>
      </header>

      <nav className="navbottom">
        <div className="nav-block">Share: <a>1</a> <a>1</a> <a>1</a></div>
        <a>Source code</a>
      </nav>

      <Gallery />


      {/* <section>
        <p className="intentions">This gallery is not for profit purpose, but to encourage discovery of unique artworks. Please, keep in mind that those pictures are copyrighted, or under license. If you use them on your blog, social media or whatever, be kind, credit the authors.</p>
      </section> */}
    </>
  )
}

export default App
