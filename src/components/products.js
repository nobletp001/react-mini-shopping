import React from "react";

// import { CardActionArea } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { useSelector } from "react-redux";

import Product from "./product";
export default function Products() {
    const products = useSelector((state) => state.shop.products);
 
  return (
    <>
      <Container>
        <Box sx={{ flexGrow: 1 ,mb:10}}>
          <Grid container spacing={2}>
            {products.map((product)=>{
              return (
                <Grid item xs={12} sm={12} md={4} lg={3} key={product.id}>
                  {/* <Link to="/item" style={{textDecoration:'none'}}> */}
                  <Product product={product}/>
                  {/* </Link> */}
                </Grid>
              );
            })}
          </Grid>
        </Box>

       
      </Container>
    </>
  );
}
