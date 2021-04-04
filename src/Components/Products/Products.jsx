import { Grid } from "@material-ui/core";
import React from "react";

const products = [
  { id: 1, name: "Shoes", description: "Running Shoes" },
  { id: 1, name: "Macbook", description: "Apple Macbook" },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            {<Product product={product} />}
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
