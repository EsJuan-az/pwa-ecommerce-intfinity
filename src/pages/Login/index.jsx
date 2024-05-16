import { Avatar, Box, Button, FormControl, Link, TextField, Typography } from '@mui/material';
import { useContext, useEffect, useState } from "react";
import UserService from '../../service/user.service';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { UIContext } from '../../context/ui.context';
import DynamicAvatar from '../../components/DynamicAvatar';
import useAuth from '../../hooks/useAuth';
const Login = props => {
    const { setAuthToken, isAuthenticated, authToken } = useAuth();
    const { handleSnack } = useContext(UIContext);
    const [ login, setLogin ] = useState({
        email: '',
        password: '',
    });
    const [isLoading, setLoading] = useState(false);
    const setEmail = ( email ) => setLogin({...login, email});
    const setPassword = ( password ) => setLogin({...login, password});
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        setLoading(true);
        UserService.login(login)
            .then(result => {
                if(result?.body?.token){                   
                    return setAuthToken(result.body.token);
                }
                handleSnack({
                    msg: 'Autentificación fallida',
                    severity: 'error',
                });
            })
            .catch(() => {
                handleSnack({
                    msg: 'Autentificación fallida',
                    severity: 'error',
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };
    useEffect(() => {
        if( isAuthenticated ){
            setLoading(false);
            navigate('/dashboard');
        }
    }, [isAuthenticated]);
  return (
    <Box bgcolor='primary.dark' className='w-full h-screen relative' > 
        <Box bgcolor='primary.light' component="form" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4
        rounded-md w-1/3 flex flex-col items-center" onSubmit={handleLogin}>
            <DynamicAvatar loading={isLoading}/>
            <Typography variant="h4" className='!font-bold' color='primary.dark'>Bienvenido</Typography>
            <FormControl className="flex flex-col gap-3 !my-3">
                <TextField id="email" 
                           label="Email" 
                           variant="outlined" 
                           color='primary'
                           required
                           value={login.email}
                           
                           onChange={e => setEmail(e.target.value)}
                           />
                <TextField id="password" 
                           type='password' 
                           label="Contraseña" 
                           variant="outlined" 
                           color='primary'
                           required
                           value={login.password}
                           onChange={e => setPassword(e.target.value)}
                           />
            </FormControl>
            <Link color='primary' className='!mb-3'>¿Olvidaste tu contraseña?</Link>
            <Button type='submit' variant="contained" color='primary'>
                        Iniciar Sesión
            </Button>
        </Box>
    </Box>    
  );
};
Login.propTypes = {};
export default Login;