import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import UI from './UI';
import ProductService from '../../../../service/product.service';
import { UIContext } from '../../../../context/ui.context';

const Page = ({module, auth}) => {
  // Request States.
  const [ productsLoading, setProductsLoading ] = useState(true);
  const [ products, setProducts ] = useState(null);

  // UI States.
  const { handleSnack } = useContext(UIContext);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  // Permissions.
  const creationDisabled = !auth?.permissions.includes('product-own-C');
  const gettingDisabled = !auth?.permissions.includes('product-own-R');
  const updationDisabled = !auth?.permissions.includes('product-own-U');
  const deletionDisabled = !auth?.permissions.includes('product-own-D');

  // Product states.
  const [product, setProduct] = useState({
    name: '',
    refer_id: '',
    price: 0,
    categoryId: undefined,
    category: undefined,
    data: {
      sizes: [],
      styles: [],
    },
  });
  const setName = e => setProduct({...product, name: e.target.value});
  const setReferId = e => setProduct({...product, refer_id: e.target.value});
  const setPrice = e => setProduct({...product, price: e.target.value});
  const setCategoryId = v => {
    const newProd = {...product};
    newProd.categoryId = v;
    newProd.category = undefined;
    setProduct(newProd);
  };
  const setCategory = v => {
    const newProd = {...product};
    if(v){
      newProd.category = {name: v, proprity: 1, companyId: auth?.auth.companyId};
      newProd.categoryId = undefined;
    }else{
      newProd.category = undefined;
    }
    setProduct(newProd);
  };
  // Size and Style.
  const [size, setSize] = useState('');
  const [style, setStyle] = useState('');
  const addSize = (size) => {
    if( product.data.sizes.includes(size.trim().toUpperCase()) || !size.trim()) return;
    setProduct({
    ...product,
    data: {
      ...product.data,
      sizes: [...product.data.sizes, size.trim().toUpperCase()],
    }});
  };
  const addStyle = (style) => {
    if( product.data.styles.includes(style.trim().toLowerCase()) || !style.trim()) return;
    setProduct({
      ...product,
      data: {
        ...product.data,
        styles: [...product.data.styles, style.trim().toLowerCase()],
      },
    });
  };
  const removeSize = (idx) => setProduct({
    ...product,
    data: {
      ...product.data,
      sizes: product.data.sizes.filter((s, i) => i !== idx),
    },
  });
  const removeStyle = (idx) => setProduct({
    ...product,
    data: {
      ...product.data,
      styles: product.data.styles.filter((s, i) => i !== idx),
    },
  });
  // Form Product submit.
  const handleProductSubmit = () => {
    // Product validation.
    // Category vs CategoryId.
    const body = {...product};
    const alertValues = {
      severity: 'error',
      variant: 'filled',
      duration: 5000,
    };
    ProductService.create(auth.token, body)
      .then(result => {
        if(result.error || !result.body){
          alertValues.msg = `No se ha podido crear tu producto`;
        }else{
          alertValues.severity = 'success';
          alertValues.msg = `Tu producto "${body.name}" se ha creado con éxito`;     
          setProducts([...products, result.body]);     
        }
      })
      .catch(err => {
        alertValues.msg = `No se ha podido crear tu producto`;
      })
      .finally(() => {
        handleSnack(alertValues);
      });
  };
  // Get products effect.
  useEffect(() => {
    if(auth && auth.token){
      setProductsLoading(true);
      ProductService.getAll(auth.token)
      .then(result => {
        if(!result.error && result.body){
          setProducts(result.body);
        }
      })
      .finally(() => {
        setProductsLoading(false);
      });
    }
  }, [auth]);
  const props = {
    module,
    products,
    // UI.
    open,
    handleClose, handleOpen,

    // Permissions.
    gettingDisabled,
    creationDisabled,
    updationDisabled,
    deletionDisabled,

    //Creation states
    product,
    setName,
    setReferId,
    setPrice,
    setCategoryId,
    setCategory,

    // Style + Size states.
    style, setStyle,
    size, setSize,
    addSize,
    addStyle,
    removeSize,
    removeStyle,

    handleProductSubmit,
  };
  return (
    <UI {...props}/>
  );
};
Page.propTypes = {
  module: PropTypes.object,
  auth: PropTypes.object,
};
export default Page;