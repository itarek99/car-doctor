import logo from '../../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='container mx-auto footer py-20 px-2'>
        <div>
          <img src={logo} alt='' />
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className='footer-title'>Services</span>
          <a href='/' className='link link-hover'>
            Branding
          </a>
          <a href='/' className='link link-hover'>
            Design
          </a>
          <a href='/' className='link link-hover'>
            Marketing
          </a>
          <a href='/' className='link link-hover'>
            Advertisement
          </a>
        </div>
        <div>
          <span className='footer-title'>Company</span>
          <a href='/' className='link link-hover'>
            About us
          </a>
          <a href='/' className='link link-hover'>
            Contact
          </a>
          <a href='/' className='link link-hover'>
            Jobs
          </a>
          <a href='/' className='link link-hover'>
            Press kit
          </a>
        </div>
        <div>
          <span className='footer-title'>Legal</span>
          <a href='/' className='link link-hover'>
            Terms of use
          </a>
          <a href='/' className='link link-hover'>
            Privacy policy
          </a>
          <a href='/' className='link link-hover'>
            Cookie policy
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
