import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';


const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    image: '',
    price: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product added:', product);
  };

  return (
    <Box p={2}>
      <Typography variant="h5" component="h1" gutterBottom>
        Add New Product
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
        <TextField
          label="Product Name"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        /> <br />
        <TextField
          label="Image URL"
          name="image"
          value={product.image}
          onChange={handleChange}
          required
        /> <br />
        <TextField
          label="Price"
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        /> <br />
        <TextField
          label="Category"
          name="category"
          value={product.category}
          onChange={handleChange}
          required
        /><br /><br /><br />
        <Button type="submit" variant="contained" color="success">
          Add Item
        </Button>
      </Box>
    </Box>
  );
};

export default AddProduct;
