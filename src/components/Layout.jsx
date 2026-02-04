import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import style from './Layout.module.css'

function Layout() {
  return (
    <>
      <div className={style.navbar}>
        <Navbar />
      </div>
      <main >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
