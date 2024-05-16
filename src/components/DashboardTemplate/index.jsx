import PropTypes from 'prop-types';
import DashNavbar from '../DashNavbar';
const DashboardTemplate = ({children}) => {
  return (
    <section className='flex flex-col'>
        <DashNavbar/>
        <section className='w-3/4 m-auto'>
          {children}
        </section>
    </section>
  );
};
DashboardTemplate.propTypes = {
    children: PropTypes.node,
};
export default DashboardTemplate;