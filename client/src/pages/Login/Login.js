import login from '../../assets/images/login/login.svg';

const Login = () => {
  return (
    <div className='hero min-h-[80vh] max-w-5xl mx-auto px-2 mb-8 '>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full'>
        <div className='h-full p-8 hidden md:block'>
          <img className='image-full' src={login} alt='login' />
        </div>
        <div className='card shadow-2xl bg-base-100'>
          <h2 className='text-4xl font-bold p-8 pb-0'>Login Now!</h2>
          <form className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input type='text' placeholder='email' className='input input-bordered' />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input type='text' placeholder='password' className='input input-bordered' />
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
        </div>
      </div>
    </div>
  );
};
export default Login;
