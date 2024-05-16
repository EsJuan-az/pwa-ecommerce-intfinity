// import PropTypes from 'prop-types';
import { AuthContext } from '../../context/auth.context';
import { useContext, useState } from 'react';
import { Avatar, Box, Container, Menu, MenuItem, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import './style.css';
const DashNavbar = () => {
    const { auth } = useContext(AuthContext); 
    const [ menuAnchor, setMenuAnchor ] = useState(null);
    const menuOpen = Boolean(menuAnchor);
    const handleProfileClick = (event) => {
      setMenuAnchor(event.currentTarget);
    };
    const handleProfileClose = () => {
        setMenuAnchor(null);
    };
  return (
    <Box bgcolor='primary.dark' className='w-full flex justify-between px-2 py-3 items-center rounded-b-sm
    [&>*]:flex [&>*]:items-center select-none'>
        <Container className='justify-start gap-5'>
            <Typography variant='h2' color='primary.contrastText' className='relative'>
              {auth?.auth.company.name}
              <Typography
                color='primary.dark'
                className='absolute bottom-[-6px] -rotate-3 poppins-extrabold right-0 text-sm grey-outline'>
                  blocks
              </Typography>
            </Typography>
            
        </Container>
        <Container className='justify-end gap-5' >
                <Typography variant='h4' color='primary.contrastText' className=''>{auth?.auth.name}</Typography>
                <Avatar
                  className='cursor-pointer'
                  src={auth?.auth.profile}
                  alt={auth?.auth.company.name}
                  sx={{
                    bgcolor: purple[900],
                  }}
                  onClick={handleProfileClick}>
                  {auth?.auth.name[0]}
                </Avatar>
                <Menu
                  className='[&>div>ul]:font-medium'
                  id="basic-menu"
                  anchorEl={menuAnchor}
                  open={menuOpen}
                  onClose={handleProfileClose}
                  MenuListProps={{
                  'aria-labelledby': 'basic-button',
                  }}>
                <MenuItem>Mi perfil</MenuItem>
                <MenuItem>Cerrar sesión</MenuItem>
            </Menu>
        </Container>
    </Box>
  );
};
DashNavbar.propTypes = {};
export default DashNavbar;