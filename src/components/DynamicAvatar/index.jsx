import { Avatar } from '@mui/material';
import PropTypes from 'prop-types';
const DynamicAvatar = ({loading}) => {
  return (
    <figure className='rounded-full relative !size-28'>
                <div className={`!w-full !h-full absolute bg-gradient-to-l from-purple-900 to-transparent rounded-full transition-opacity animate-spin
                ${loading ? ' opacity-100 ' : ' opacity-0 '}`} />
                <Avatar alt="Intfinity Blocks" src="/images/avatar.png" className='!w-full !h-full !absolute'/>
    </figure>
  );
};
DynamicAvatar.propTypes = {
    loading: PropTypes.bool,    
};
export default DynamicAvatar;