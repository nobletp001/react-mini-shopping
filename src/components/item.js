import React  from 'react'
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../reduxComponent/shopping/shopping-actions";

export default function Item() {
    const Item = useSelector((state) => state.shop.currentItem);
     const dispatch = useDispatch();

    return (
      <div>
        <Container>
          <Card
            sx={{
              display: { sm: "coloumn", lg: "flex", md: "flex" },
              flexDirection: "row",
              mb: 10,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <CardContent>
                <CardMedia
                  component="img"
                  image={Item.image}
                  alt={Item.title}
                />
              </CardContent>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  size="small"
                  style={{
                    color: "#1565c0",
                    textTransform: "Capitalize",
                  }}
                  sx={{
                    mt: 2,
                    ml: { lg: 60, xs: 30, sm: 37, md: 58 },
                  }}
                >
                  Go Back
                </Button>
              </Link>

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {Item.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
                  {Item.description}
                </Typography>
                <Typography
                  variant="h5"
                  style={{ color: "#424242" }}
                  gutterBottom
                >
                  Details
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={{ color: "#424242" }}
                  gutterBottom
                >
                  category: {Item.category}
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={{ color: "#424242" }}
                  gutterBottom
                >
                  rating: {Item.rating.rate}
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={{ color: "#424242" }}
                  gutterBottom
                >
                  count:{Item.rating.count}
                </Typography>
                <Typography
                  variant="h4"
                  style={{ color: "#ec407a", textAlign: "center" }}
                  gutterBottom
                >
                  ${Item.price}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ width: "100%", borderRadius: 16, mt: { lg: 20 } }}
                  style={{ textTransform: "Capitalize" }}
                  onClick={() => dispatch(addToCart(Item.id))}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Box>
          </Card>
        </Container>
      </div>
    );
}
