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
    </>
  )
}

export default App
