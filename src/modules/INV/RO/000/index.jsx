import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Box, Fab, Icon, Modal, FormControl, TextField, Button } from '@mui/material';
import { useState } from 'react';
import CategorySelect from '../../../../components/CategorySelect';
import { Container } from 'postcss';
const Page = ({module, auth}) => {
  const loading = !module;
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const creationDisabled = !auth?.permissions.includes('product-own-C');
  const [product, setProduct] = useState({
    name: '',
    refer_id: '',
    price: 0,
    categoryId: null,
    category: null, 
  });
  const setName = e => setProduct({...product, name: e.target.value});
  const setReferId = e => setProduct({...product, refer_id: e.target.value});
  const setPrice = e => setProduct({...product, price: e.target.value});
  const setCategoryId = v => {
    const newProd = {...product};
    newProd.categoryId = v;
    newProd.category = null;
    setProduct(newProd);
  };
  const setCategory = v => {
    const newProd = {...product};
    if(v){
      newProd.category = {name: v, proprity: 1, companyId: auth?.auth.companyId};
      newProd.categoryId = null;
    }else{
      newProd.category = null;
    }
    setProduct(newProd);
  };
  return (
    <Box>
      <Container className='flex'>
        <Typography variant='h2' className='poppins-bold' color='primary.dark'> 
          {module?.name}
        </Typography>
        <Fab onClick={handleOpen} color="primary" aria-label="add" className=''  disabled={creationDisabled}>
          <Icon color="primary.light">add</Icon>
        </Fab>
      </Container>


      <Fab onClick={handleOpen} color="primary" aria-label="add" className='absolute bottom-5 right-5'  disabled={creationDisabled}>
        <Icon color="primary.light">add</Icon>
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor='primary.light' color='primary.dark' className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3">
        <Typography variant='h2' className='poppins-bold' color='primary.dark'> 
          Crear Producto
       </Typography>
        <FormControl className="flex flex-col gap-3 !my-3">
              <TextField id="name" 
                          label="Nombre" 
                          variant="outlined" 
                          color='primary'
                          required
                          value={product.name}                    
                          onChange={setName}
                          />
              <TextField id="refer_id" 
                          label="Codigo" 
                          variant="outlined" 
                          color='primary'
                          required
                          value={product.refer_id}                    
                          onChange={setReferId}
              />
              <TextField id="price" 
                           label="Precio" 
                           variant="outlined" 
                           color='primary'
                           required
                            value={product.price}
                           onChange={setPrice}
                />
       
                <CategorySelect setCategory={setCategory} setCategoryId={setCategoryId}/>
                <Button type='submit' variant="contained" color='primary' onClick={() => console.log(product)}>
                        Añadir
                </Button>
        </FormControl>
        </Box>
      </Modal>

    </Box>
  );
};
Page.propTypes = {
  module: PropTypes.object,
  auth: PropTypes.object,
};
export default Page;