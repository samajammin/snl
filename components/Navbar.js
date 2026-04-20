export default function Navbar() {
  return (
    <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-main-collapse"
          >
            <i className="fa fa-bars fa-lg"></i>
          </button>
          <a className="navbar-brand page-scroll" href="/">
            <i className="fa fa-university"></i>{" "}
            <span className="light">South Natick</span> Law
          </a>
        </div>

        <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
          <ul className="nav navbar-nav">
            <li className="hidden">
              <a href="#top"></a>
            </li>
            <li>
              <a className="page-scroll" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="page-scroll" href="/areas-of-practice">
                Areas of Practice
              </a>
            </li>
            <li>
              <a className="page-scroll" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
