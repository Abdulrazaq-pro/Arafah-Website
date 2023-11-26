function Header() {
  function disappear() {
    document.getElementById("nav").classList.add("toggler");
  }

  function navFunction() {
    document.getElementById("nav").classList.toggle("toggler");
  }
  return (

    <div className="sticky-top bg-white px-3">
      <nav className="navbar">
        <a href="#hero" className="navbar-brand">
          <span className="bg-black text-white px-2"> YURI</span> URI
        </a>

        <button
          className="navbar-toggler"
          id="mobile-menu"
          onClick={navFunction}
          type="button"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="toggler" id="nav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a
                href="#showcase"
                className="nav-link fw-bold"
                onClick={disappear}
              >
                WORK
              </a>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link fw-bold" onClick={disappear}>
                ABOUT
              </a>
            </li>

            <li className="nav-item">
              <a href="#icon" className="nav-link fw-bold" onClick={disappear}>
                SHOP
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
