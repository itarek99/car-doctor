import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const handleSignOut = () => {
    userSignOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  const navItems = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <a href='/'>About</a>
      </li>
      <li>
        <a href='/'>Services</a>
      </li>
      <li>
        <Link to='/orders'>Orders</Link>
      </li>
      <li>
        <a href='/'>Contact</a>
      </li>
      <li>
        <Link to='/login' href='/'>
          Login
        </Link>
      </li>
      <li>
        <button className='p-0 text-primary' onClick={handleSignOut}>
          {user?.email}
        </button>
      </li>
    </>
  );

  return (
    <div className='bg-base-100'>
      <div className='container mx-auto navbar h-28'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost md:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' />
              </svg>
            </label>
            <ul className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
              {navItems}
            </ul>
          </div>
          <Link to='/'>
            <img className='h-12' src={logo} alt='' />
          </Link>
        </div>
        <div className='navbar-center hidden md:flex'>
          <ul className='menu menu-horizontal p-0 font-semibold'>{navItems}</ul>
        </div>
        <div className='navbar-end'>
          <a href='/' className='btn btn-outline btn-primary'>
            Appointment
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
