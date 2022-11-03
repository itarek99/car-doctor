import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Order from './Order/Order';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/orders?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [url]);

  const handleDelete = (_id) => {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      fetch(`http://localhost:5000/orders/${_id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert('deleted successfully');

            const remaining = orders.filter((order) => order._id !== _id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ status: 'approved' }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((order) => order._id !== id);
          const approving = orders.find((order) => order._id === id);
          approving.status = 'Approved';
          const newOrders = [...remaining, approving];

          setOrders(newOrders);
        }
      });
  };

  return (
    <div className='container mx-auto px-2 my-10'>
      <div className='max-w-5xl mx-auto overflow-x-auto w-full'>
        <table className='table w-full border'>
          <tbody>
            {orders.map((order) => (
              <Order key={order._id} handleDelete={handleDelete} handleUpdate={handleUpdate} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Orders;
