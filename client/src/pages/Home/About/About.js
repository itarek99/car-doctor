import parts from '../../../assets/images/about_us/parts.jpg';
import person from '../../../assets/images/about_us/person.jpg';

const About = () => {
  return (
    <div className='container mx-auto mb-20 px-2'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-14'>
        <div className='relative h-96 lg:h-auto'>
          <img className='absolute w-4/5 h-4/5 object-cover object-left' src={person} alt='about person' />
          <img className='absolute bottom-0 right-0 w-2/3 lg:w-1/2 h-3/5 object-cover' src={parts} alt='about person' />
        </div>
        <div>
          <h4 className='font-bold text-xl text-primary'>About Us</h4>
          <h2 className='font-bold text-5xl mt-4 mb-6'>
            We are qualified <br /> & of experience <br /> in this field
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomized words which don't look even slightly believable.
          </p>
          <p className='my-6'>
            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look
            even slightly believable.
          </p>
          <button className='btn btn-primary'>Get More Info</button>
        </div>
      </div>
    </div>
  );
};
export default About;
