function HeaderNavigation() {
  return (
    <div className="header-navigation">
      <h1 className="logo-text">PowerHouse</h1>
      <nav>
        <ol className="navigation-list">
          <li className="navigation-item">
            <a href="#" className="navigation-link">
              Home
            </a>
          </li>
          <li className="navigation-item">
            <a href="#" className="navigation-link">
              about
            </a>
          </li>
          <li className="navigation-item">
            <a href="#" className="navigation-link">
              products
            </a>
          </li>
          <li className="navigation-item">
            <a href="#" className="navigation-link">
              staff
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
}
export default HeaderNavigation;
