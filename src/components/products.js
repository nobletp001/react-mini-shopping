import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {addToCart} from '../reduxComponent/shopping/shopping-actions'
import { loadCurrentItem } from "../reduxComponent/shopping/shopping-actions";

export default function Products() {
    const products = useSelector((state) => state.shop.products);
     const dispatch = useDispatch();

  return (
    <>
      <Container>
        <Box sx={{ flexGrow: 1 ,mb:10}}>
          <Grid container spacing={2}>
            {products.map((product)=>{
              return (
                <Grid item xs={12} sm={12} md={4} lg={3} key={product.id}>
                  {/* <Link to="/item" style={{textDecoration:'none'}}> */}
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.image}
                      alt="green iguana"
                      sx={{ justifyContent: "center", alignItems: "center" }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        noWrap
                        style={{ color: "#00acc1", fontFamily: "serif" }}
                      >
                        {product.title}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Link
                          to={`/item/${product.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            variant="outlined"
                            size="small"
                            style={{
                              color: "#1565c0",
                              textTransform: "Capitalize",
                            }}
                            onClick={() => dispatch(loadCurrentItem(product))}
                          >
                            Details...
                          </Button>
                        </Link>

                        <Typography variant="h6" style={{ color: "#ec407a" }}>
                          ${product.price}
                        </Typography>
                      </Box>
                      <Button
                        variant="contained"
                        sx={{ width: "100%", borderRadius: 16 }}
                        style={{ textTransform: "Capitalize" }}
                        onClick={() => dispatch(addToCart(product.id))}
                      >
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
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
