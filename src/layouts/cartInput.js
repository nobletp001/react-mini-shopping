import React,{useState} from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
  import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";

import {
  removeFromCart,
  addQty,
} from "../reduxComponent/shopping/shopping-actions";

export default function CartInput({cartData}) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(cartData.qty);
const handleQty=(e)=>{
    setValue(e.target.value)
    dispatch(addQty(cartData.id, e.target.value))
}
    return (
      <div>
        <Card
          sx={{ maxWidth: 370, mb: 1 }}
       
          style={{ backgroundColor: "#e3f2fd" }}
        >
          <CardMedia
            component="img"
            height="200"
            image={cartData.image}
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
              {cartData.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <IconButton
                component="span"
                color="primary"
                onClick={() => dispatch(removeFromCart(cartData.id))}
              >
                <DeleteIcon />
              </IconButton>
              <Typography variant="h6" style={{ color: "#ec407a" }}>
                ${cartData.price}
              </Typography>
            </Box>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              value={value}
              sx={{ width: "100%" }}
              onChange={handleQty}
            />
          </CardContent>
          <Divider />
        </Card>
      </div>
    );
}
