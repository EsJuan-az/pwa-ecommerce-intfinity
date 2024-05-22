import { Box, FormControl, FormGroup, Typography } from '@mui/material';
import PropTypes from 'prop-types';
const AddProduct = ({children}) => {
  return (
    <Box bgcolor='primary.light' color='primary.dark' className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 max-h-full overflow-y-scroll">
        <Typography variant='h2' className='poppins-bold' color='primary.dark'> 
          Crear Producto
        </Typography>
            <FormControl>
                <FormGroup className="flex flex-col gap-3 !my-3" >
                    {children}
                </FormGroup>
            </FormControl>
    </Box>
  );
};
AddProduct.propTypes = {
    children: PropTypes.node,
};
export default AddProduct;