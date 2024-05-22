import { Icon } from '@mui/material';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';

const CardTemplate = ({children, name, description, to='', icon}) => {
  
  return (
    <Badge color="primary" badgeContent={0} className=''>
      <Card>
          <CardContent>
            <Typography gutterBottom variant="h2" className='poppins-bold text-xl flex gap-2 items-center' color="primary">
              <Icon color="primary">{icon}</Icon>
              {name}
            </Typography>

            <Typography variant="body2" className='mt-[-10px]' color="text.secondary">
              {description}
            </Typography>

              {children}
          </CardContent>
        <CardActions>
           <Link to={to}>
            <Button size="small">Ir a {name}</Button>
           </Link>
        </CardActions>
      </Card>
      </Badge>
  
  );
};
CardTemplate.propTypes = {
    children: PropTypes.node,
    name: PropTypes.string,
    description: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.string,
};
export default CardTemplate;