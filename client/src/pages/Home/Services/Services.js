import { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className='container mx-auto mb-20 px-2'>
      <div className='text-center'>
        <h4 className='font-bold text-xl text-primary'>Services</h4>
        <h2 className='font-bold text-5xl mt-3'>Our Services Area</h2>
        <p className='w-full md:w-3/4 xl:w-1/2 mx-auto mt-5'>
          the majority have suffered alteration in some form, by injected humour, or randomised words which don't look
          even slightly believable.
        </p>
      </div>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-12'>
        {services.map((item) => (
          <ServiceCard key={item._id} service={item} />
        ))}
      </div>

      <div className='text-center mt-12'>
        <button className='btn btn-primary btn-outline'>More Services</button>
      </div>
    </div>
  );
};
export default Services;
