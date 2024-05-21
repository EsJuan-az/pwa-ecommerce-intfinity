import { Autocomplete, TextField } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import CategoryService from '../../service/category.service';
const CategorySelect = ({setCategoryId, setCategory}) => {
    const { auth, auth_token } = useAuth();
    const [ categories, setCategories ] = useState(null);

    const loading = !categories;
    useEffect(() => {
        CategoryService.getAll(auth_token)
          .then(result => {
            if(!result.error){
              setCategories(result.body);
            }
          });
    }, []);
  return (
      <Autocomplete
                  disablePortal
                  freeSolo
                  id="category"
                  getOptionLabel={(option) => option.name}
                  options={categories || []}
                  sx={{ width: 300 }}
                  onChange={(event, category) => {
                      setCategoryId(category?.id);  
                    }}
                  onInputChange={(event, newInputValue) => {
                      const category = (categories || []).find( c => c.name.trim().toLowerCase() == newInputValue.trim().toLowerCase());
                      if( category ){
                        setCategoryId(category.id);
                      }else{
                        setCategory(newInputValue);
                      }
                  }}
                  renderInput={(params) => <TextField {...params} label="Categoría" />}
                />
  );
};
CategorySelect.propTypes = {};
export default CategorySelect;