import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';


const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Grid container spacing={2} p={2}>
      {products.map(product => (
        <Grid item xs={12} sm={6} md={3} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={product.image}
              alt={product.title}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${product.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.category}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Dashboard;
