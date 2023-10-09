const Navbar = () => {
  return (
    <header>
      <nav className="container flex navigation">
        <div className="flex nav-left">
          <h1>
            <strong>Bikram</strong>{" "}
          </h1>
          <div className="line">Full-Stack Developer</div>
        </div>

        <div className="menu">
          <ul className="flex">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
