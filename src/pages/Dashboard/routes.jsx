import PropTypes from 'prop-types';
import { useRoutes } from 'react-router-dom';
import DashHome from './pages/DashHome';
import INV_RO_000 from '../../modules/INV/RO/000';
import ProtectedModulePage from '../../components/ProtectedModulePage';
const DashboardRoutes = () => useRoutes([
    {
        path: '/',
        element: <DashHome/>,
    },
    {
        path: '/inv_ro_000',
        element: <ProtectedModulePage ModulePage={INV_RO_000} code='inv_ro_000'/>,
    },


]);

export default DashboardRoutes;