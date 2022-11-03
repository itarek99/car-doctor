import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;

  return (
    <div className='card bg-base-100 shadow-xl rounded-none border'>
      <figure>
        <img className='h-60 object-cover w-full' src={img} alt={title} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-2xl font-bold'>{title}</h2>
        <Link to={`/checkout/${_id}`} className='flex justify-between items-center'>
          <p className='text-xl font-semibold text-primary text-start'>Price: {price}</p>
          <span className=' btn-link no-underline text-xl'>❯</span>
        </Link>
      </div>
    </div>
  );
};
export default ServiceCard;
