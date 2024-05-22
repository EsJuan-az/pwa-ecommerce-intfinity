import { Box, Button, Divider, Fab, Grid, Icon, Modal, TextField, Typography, Container, Chip, Stack, InputAdornment } from '@mui/material';
import PropTypes from 'prop-types';
import CategorySelect from '../../../../components/CategorySelect';
import AddProduct from '../../../../components/AddProduct';
const UI = ({
    module,
    products,
    open,
    handleClose, handleOpen,

    creationDisabled,
    gettingDisabled,
    deletionDisabled,
    updationDisabled,

    product,
    setName,
    setReferId,
    setPrice,
    setCategoryId,
    setCategory,
    
    style,setStyle,
    size, setSize,
    addSize,
    addStyle,
    removeSize,
    removeStyle,
    handleProductSubmit,
  }) => {
    console.log(products);
  return (
    <Box>
    <Container className='flex'>
      <Typography variant='h2' className='poppins-bold' color='primary.dark'> 
        {module?.name}
      </Typography>
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
      <section>
          <AddProduct>
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
            <Divider className='font-medium' color='primary.dark'>Tallas Disponibles</Divider>
            
                <form onSubmit={e => {
                    e.preventDefault();
                    addSize(size);
                    setSize('');
                }} className='w-full flex flex-col relative'>
                    <TextField id="size"
                              label="Talla"
                              required
                              value={size}
                              onChange={(e)=>{setSize(e.target.value);}}
                          />
                    <Button className='absolute right-0 top-1/2 -translate-y-1/2 h-full'
                    onClick={ ()=>{
                            addSize(size);
                            setSize('');
                        }}>
                        <Icon>add</Icon>
                    </Button>
                </form>
            

            <Box>
                {
                    product.data.sizes?.map((size, i)=>{
                        return <Chip key={i} label={size} onDelete={() => removeSize(i)} />;
                    })
                }
            </Box>
            
            
            <Divider className='font-medium' color='primary.dark'>Estilos Disponibles</Divider>


    
          
            <form onSubmit={e => {
                e.preventDefault();
                addStyle(style);
                setStyle('');
            }} className='w-full flex flex-col relative'>
                <TextField id="styles"
                            label="Estilo"
                            required
                            value={style}
                            onChange={e=>setStyle(e.target.value)}
                        />
                <Button className='absolute right-0 top-1/2 -translate-y-1/2 h-full'
                    onClick={ ()=>{
                            addStyle(style);
                            setStyle('');
                        }}>
                        <Icon>add</Icon>
                </Button>
                
            </form>
            <Box>
                {
                    product.data.styles?.map((style, i)=>{
                        return <Chip key={i} label={style} onDelete={()=> removeStyle(i)}/>;
                    })
                }
            </Box>
          
            <Button type='submit' variant="contained" color='primary' onClick={handleProductSubmit}>
                    Añadir
            </Button>
          </AddProduct>
      </section>
    </Modal>

  </Box>
  );
};
UI.propTypes = {
    products: PropTypes.array,
    module: PropTypes.object,
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    handleOpen: PropTypes.func,

    creationDisabled: PropTypes.bool,
    gettingPermission: PropTypes.bool,
    deletionPermission: PropTypes.bool,
    updationPermission: PropTypes.bool,

    product: PropTypes.object,
    setName: PropTypes.func,
    setReferId: PropTypes.func,
    setPrice: PropTypes.func,
    setCategoryId: PropTypes.func,
    setCategory: PropTypes.func,
    
    style: PropTypes.string,
    setStyle: PropTypes.func,
    size: PropTypes.string,
    setSize: PropTypes.func,
    addSize: PropTypes.func,
    addStyle: PropTypes.func,
    removeSize: PropTypes.func,
    removeStyle: PropTypes.func,

    handleProductSubmit: PropTypes.func,
  };
export default UI;