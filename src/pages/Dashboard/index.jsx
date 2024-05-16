import ProtectedPage from '../../components/ProtectedPage';
import DashboardRoutes from './routes';
import DashboardTemplate from '../../components/DashboardTemplate';
const Dashboard = props => {
  return (
    <ProtectedPage>
      <DashboardTemplate>
        <DashboardRoutes/>
      </DashboardTemplate>
    </ProtectedPage>
  );
};
Dashboard.propTypes = {};
export default Dashboard;