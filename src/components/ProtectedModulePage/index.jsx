import PropTypes from 'prop-types';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const ProtectedModulePage = ({ModulePage, code}) => {
    const navigate = useNavigate();
    const { auth } = useAuth(); 
    let moduleData = auth?.auth.role.moduleSet;
    if( moduleData ){
      moduleData = moduleData.find(m => m.code == code);
    }
    const loading = !auth;
    useEffect(() => {
      if(!loading && !moduleData){
        navigate('/dashboard');
      }
    }, [loading, moduleData]);
  return (
    <section>
        <h2>Holaaa</h2>
        <ModulePage module={moduleData}/>
    </section>
  );
};
ProtectedModulePage.propTypes = {
    ModulePage: PropTypes.node,
    code: PropTypes.string,
};
export default ProtectedModulePage;