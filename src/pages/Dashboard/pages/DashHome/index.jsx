import PropTypes from 'prop-types';
import useAuth from '../../../../hooks/useAuth';
import CardTemplate from '../../../../components/CardTemplate';
const DashHome = props => {
  const { auth } = useAuth(); // TODO: Encargarse de que todas las paginas reciban el auth en el props.
  const { moduleSet = [] } = auth?.auth.role || {};
  const ModuleCards = moduleSet.map((m, i) => {
    return <CardTemplate
      key={i}
      name={m.name}
      description={m.description}
      to={m.code}
      icon={m.icon}/>;
  });
  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      {ModuleCards}
    </div>
  );
};
DashHome.propTypes = {};
export default DashHome;