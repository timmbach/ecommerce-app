import { Grid } from "@material-ui/core";
import React from "react";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running Shoes",
    price: "$5",
    image:
      "https://th.bing.com/th/id/R6484dd37cf834268b61e30e1c4f142ce?rik=lvZ8jt81cQebTQ&riu=http%3a%2f%2fcdn.runningshoesguru.com%2fwp-content%2fuploads%2f2016%2f07%2fAsics-Gel-Kayano-23-Pair.jpg&ehk=%2fCGFMN8JLXZPA%2facRZJD6qokwb2N9J%2fBEggh8UBLn%2bI%3d&risl=&pid=ImgRaw",
  },

  {
    id: 2,
    name: "Macbook",
    description: "Apple Macbook",
    price: "$10",
    image:
      "https://th.bing.com/th/id/R5f959c11cc7a34c30108d63f3a3af26c?rik=s6yv6d66PbrTmg&riu=http%3a%2f%2fstatic.trustedreviews.com%2f94%2f000038c9a%2f0434_orh500w750%2fmacbook-12.jpg&ehk=eP8c8TV1lD1b7gKuU8o3uUMDbZxf25HHyFh23wvryn4%3d&risl=&pid=ImgRaw",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
