import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';
import UserService from '../service/user.service';


const AuthContext = React.createContext();
const AuthProvider = ({children}) => {
    const [cookies, setCookie, removeCookie] = useCookies(['auth_token']);
    const [ isUserLoading, setUserLoading ] = useState(true);
    const setAuthToken = (token) => {
        if( !token ){
            removeCookie('auth_token', { path: '/' });
            
        }else{
            setCookie('auth_token', token, { path:'/' });
            
        }
    };
    const {auth_token} = cookies;
    const [auth, setAuth] = useState(null);
    const isAuthenticated = Boolean(auth);

    useEffect(() => {
        if(!auth_token){
            setUserLoading(false);
            setAuth(null);
            return;
        }
        setUserLoading(true);
        UserService.getMe(auth_token)
            .then( result => {
                if( !result.error ){
                    return setAuth({...result.body, token: auth_token});
                }
            })
            .catch( err => {
                console.error(err);
            })
            .finally(() => {
                setUserLoading(false);
            });

        
    }, [auth_token]);
    return (
      <AuthContext.Provider value={{
        auth_token, setAuthToken,
        auth,
        isAuthenticated,
        isUserLoading,
      }}>
              {children}
      </AuthContext.Provider>
    );
  };
  AuthProvider.propTypes = {
      children: PropTypes.node,
  };
  export { AuthContext, AuthProvider };