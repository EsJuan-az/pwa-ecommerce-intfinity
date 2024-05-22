import { Button, Card, CardActions, CardContent, Icon, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const ProductCard = props => {
  return (
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
  );
};
ProductCard.propTypes = {};
export default ProductCard;