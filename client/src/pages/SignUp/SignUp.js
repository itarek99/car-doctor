import { useContext } from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
  const { createUserWithEmail } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    createUserWithEmail(email, password)
      .then(() => {})
      .catch((err) => console.error(err));
  };

  return (
    <div className='hero min-h-[80vh] max-w-5xl mx-auto px-2 mb-8 '>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full'>
        <div className=' p-8 hidden md:block'>
          <img className='image-full' src={login} alt='login' />
        </div>
        <div className='card shadow-2xl bg-base-200'>
          <h2 className='text-4xl font-bold mt-8 text-center'>Register Now!</h2>
          <form onSubmit={handleSignUp} className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input type='text' placeholder='name' name='name' className='input input-bordered' />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input type='email' placeholder='email' name='email' className='input input-bordered' required />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input type='password' placeholder='password' name='password' className='input input-bordered' required />
            </div>
            <div className='form-control mt-6'>
              <input className='btn btn-primary' type='submit' value='Sign Up' />
            </div>
          </form>
          <p className='mb-8 text-center'>
            already have an account?&nbsp;
            <Link className='font-bold text-primary' to='/login'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
