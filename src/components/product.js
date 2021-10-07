import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../reduxComponent/shopping/shopping-actions";
import { loadCurrentItem } from "../reduxComponent/shopping/shopping-actions";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 20,
  p: 4,
  height:"90%",
  width:'80%',
  maxWidth:500
};

function Product({product}) {
     const dispatch = useDispatch();
 const [open, setOpen] = React.useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          height="150"
          image={product.image}
          alt="green iguana"
          onClick={handleOpen}
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
            <Link to={`/item/${product.id}`} style={{ textDecoration: "none" }}>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <CardMedia
            component="img"
            height="150"
            image={product.image}
            alt="green iguana"
            sx={{ height: "100%" }}
          />
          <Button
            variant="outlined"
            size="small"
            sx={{ mx: "50%", mt: 1 }}
            onClick={handleClose}
          >
            close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
export default Product