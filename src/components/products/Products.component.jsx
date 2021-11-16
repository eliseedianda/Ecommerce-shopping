import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product.component";
import useStyles from "./Products.styles.js";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Runing shoes",
    price: "R100",
    image:
      "https://cdn.shopify.com/s/files/1/2245/5649/products/caramel_1_510x@2x.progressive.jpg?v=1634655193",
  },
  {
    id: 1,
    name: "Macbook",
    description: "Apple macbook",
    price: "R700",
    image:
      "https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
