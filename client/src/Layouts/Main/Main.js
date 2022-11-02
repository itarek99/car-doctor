import Footer from '../../pages/Shared/Footer/Footer';
import Header from '../../pages/Shared/Header/Header';

import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Main;
