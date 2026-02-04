import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">LandingPage</Link></li>
          {/* <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li> */}
        </ul>
      </nav>
      
      <main >
        {/* This renders the matched route component */}
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;