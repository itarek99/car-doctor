import { useEffect, useState } from 'react';

const Order = ({ order, handleDelete, handleUpdate }) => {
  const [orderService, setOrderService] = useState({});
  const { price, serviceName, customer, phone, service, _id, status } = order;

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service]);

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className='btn btn-circle btn-sm'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
      </th>
      <td>
        <div className='flex items-center space-x-3'>
          <div className='avatar'>
            <div className='mask mask-squircle w-16 h-16'>
              <img src={orderService.img} alt={orderService.title} />
            </div>
          </div>
          <div>
            <div className='font-bold'>{customer}</div>
            <div className='text-sm opacity-50'>{phone}</div>
          </div>
        </div>
      </td>
      <td>
        <div className='font-bold mb-1'>{serviceName}</div>
        <div className='font-semibold'>${price}</div>
      </td>

      <td className='text-end'>
        <button onClick={() => handleUpdate(_id)} className='btn btn-primary btn-sm'>
          {order?.status ? 'Approved' : 'Pending'}
        </button>
      </td>
    </tr>
  );
};
export default Order;
