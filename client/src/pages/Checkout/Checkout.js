import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Checkout = () => {
  const { _id, title, price } = useLoaderData();

  const { user } = useContext(AuthContext);

  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value || 'unregistered';
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      phone,
      email,
      message,
    };

    fetch(`http://localhost:5000/orders`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((err) => console.error(err));
  };

  return (
    <div className='container mx-auto my-10 px-2'>
      <form onSubmit={handleOrder} className='max-w-3xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <input
            name='serviceName'
            type='text'
            placeholder='Service Name'
            defaultValue={title}
            readOnly
            className='md:col-span-2 input input-bordered w-full'
          />
          <input
            name='name'
            type='text'
            placeholder='Your Name'
            defaultValue={user?.displayName}
            className='input input-bordered w-full'
          />
          <input type='text' name='phone' placeholder='Your Phone' className='input input-bordered w-full' />
          <input
            name='email'
            type='text'
            placeholder='Your Email'
            defaultValue={user?.email}
            className='md:col-span-2 input input-bordered w-full'
            readOnly
          />
          <textarea
            name='message'
            placeholder='Your Message'
            rows={5}
            className='md:col-span-2 text-base textarea textarea-bordered w-full'
          />
        </div>
        <input className='btn btn-primary w-full mt-4' type='submit' value='Confirm Order' />
      </form>
    </div>
  );
};
export default Checkout;
