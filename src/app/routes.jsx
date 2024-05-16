import PropTypes from 'prop-types';
import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => useRoutes([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/dashboard/*',
        element: <Dashboard/>,
    },
]);


export default AppRoutes;