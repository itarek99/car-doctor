import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
  const { singInWithEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    singInWithEmail(email, password)
      .then(() => {
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className='hero min-h-[80vh] max-w-5xl mx-auto px-2 mb-8 '>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full'>
        <Link to='/' className='p-8 hidden md:block'>
          <img className='image-full' src={login} alt='login' />
        </Link>
        <div className='card shadow-2xl bg-base-200'>
          <h2 className='text-4xl font-bold mt-8 text-center'>Login Now!</h2>
          <form onSubmit={handleLogin} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input type='text' placeholder='email' name='email' className='input input-bordered' />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input type='password' placeholder='password' name='password' className='input input-bordered' />
              <label className='label'>
                <a href='/' className='label-text-alt link link-hover'>
                  Forgot password?
                </a>
              </label>
            </div>
            <div className='form-control mt-6'>
              <input className='btn btn-primary' type='submit' value='Login' />
            </div>
          </form>
          <p className='mb-8 text-center'>
            don't have an account?&nbsp;
            <Link className='font-bold text-primary' to='/signup'>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
