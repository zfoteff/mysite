import './stylesheets/Header.css'

function Header() {
  return (
    <header classname="Header">
      <div className="Header.navigation">
        <button onClick={"location.href='/'"}>
          About
        </button>
        <button onClick={"location.href='/projects'"}>
          Projects
        </button>
        <button onClick={"location.href='/contact'"}>
          Contact Me
        </button>
      </div>
    </header>
  )
}

export default Header;