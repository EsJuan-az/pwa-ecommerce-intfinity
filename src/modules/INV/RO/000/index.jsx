import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
const Page = ({module}) => {
  const loading = !module;
  return (
    <div>
      <Typography variant='h2' className='poppins-bold' color='primary.dark'> 
        {module?.name}
       </Typography>
    </div>
  );
};
Page.propTypes = {
  module: PropTypes.object,
};
export default Page;