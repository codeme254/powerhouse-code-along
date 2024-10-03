import { Link } from "react-router-dom";
function HeaderNavigation() {
  return (
    <div className="header-navigation">
      <h1 className="logo-text">PowerHouse</h1>
      <nav>
        <ol className="navigation-list">
          <li className="navigation-item">
            <Link to="/" className="navigation-link">
              Home
            </Link>
          </li>
          <li className="navigation-item">
            <Link to="/about" className="navigation-link">
              about
            </Link>
          </li>
          <li className="navigation-item">
            <Link to="/products" className="navigation-link">
              products
            </Link>
          </li>
          <li className="navigation-item">
            <Link to="/staff" className="navigation-link">
              staff
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}
export default HeaderNavigation;
