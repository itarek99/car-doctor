import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <div className='container mx-auto'>loading....</div>;

  if (!user) return <Navigate to='/login' state={{ from: location }} replace />;

  return children;
};
export default PrivateRoute;
