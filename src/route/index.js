import { Navigate } from 'react-router-dom'
import Login from '../views/login'
import PaperView from '../views/paper'
const routes = [
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/paper',
    element: <PaperView />,
  },
]
export default routes
