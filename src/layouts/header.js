import React ,{ useState , useEffect}from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
  import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
  import Drawer from "@mui/material/Drawer";
  import List from "@mui/material/List";
  // import ListItem from "@mui/material/ListItem";
  // import ListItemIcon from "@mui/material/ListItemIcon";
  // import ListItemText from "@mui/material/ListItemText";
  // import InboxIcon from "@mui/icons-material/MoveToInbox";
  // import MailIcon from "@mui/icons-material/Mail";
  import BottomNavigation from "@mui/material/BottomNavigation";
  import Paper from "@mui/material/Paper";

import Container from "@mui/material/Container";
import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {logOut} from '../reduxComponent/shopping/auth/auth-actions'

import CartInput from './cartInput'


import './header.css'
// import { maxHeight } from '@mui/system';



export default function Header({ children },) {
     const dispatch = useDispatch();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const carts = useSelector((state) => state.shop.carts);

  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
useEffect(() => {
  let items=0
  let price=0
  carts.forEach(cart => {
    items += cart.qty
    price += cart.qty * cart.price
  });
  setTotalItem(items)
  setTotalPrice(price)
}, [carts, totalPrice, totalItem, setTotalItem, setTotalPrice])

  useEffect(() => {
  let extra = 0;

    carts.forEach((item) => {
      extra += parseInt(item.qty);
    });
    setCount(extra);
  }, [carts, count]);


  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 400 }}
      role="presentation"
      //  onClick={toggleDrawer(anchor, false)}
      //  onKeyDown={toggleDrawer(anchor, false)}
      //  style={{ backgroundColor: "#1565c0", height: "100%" }}
    >
      <List>
        <IconButton
          component="span"
          onClick={toggleDrawer(anchor, false)}
          color="primary"
        >
          <CancelPresentationOutlinedIcon />
        </IconButton>
        <Container>
          {carts.map((cart) => {
            return <CartInput key={cart.id} cartData={cart} />;
          })}
          {carts.length === 0 ? (
            ""
          ) : (
            <Box
              sx={{
                "& > :not(style)": {
                  width: "100%",
                  height: 140,
                },
              }}
            >
              <Paper elevation={3}>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                  sx={{ mx: 2 }}
                >
                  Cart summary
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    mx: 3,
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="subtitle1" gutterBottom>
                    Total:( {totalItem} items)
                  </Typography>
                  <Typography
                    variant="h4"
                    style={{ color: "#ec407a" }}
                    gutterBottom
                  >
                   ${Math.floor(totalPrice)}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  sx={{ width: "100%" }}
                  style={{ textTransform: "Capitalize" }}
                >
                  Proceed To checkOut
                </Button>
              </Paper>
            </Box>
          )}
        </Container>
      </List>
    </Box>
  );
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} elevation="2">
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h5" component="span" sx={{ flexGrow: 1 }}>
              React-Mini-shop
            </Typography>
            <Button
              variant="contained"
              endIcon={<ExitToAppOutlinedIcon />}
              onClick={() => dispatch(logOut())}
            >
              Log-out
            </Button>
            {["right"].map((anchor) => (
              <div key={anchor}>
                <Button color="inherit" onClick={toggleDrawer(anchor, true)}>
                  <IconButton
                    color="inherit"
                    aria-label="add to shopping cart"
                    className="cart"
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                  <Typography variant="h5" component="div" className="cart-num">
                    {count}
                  </Typography>
                </Button>
              </div>
            ))}
          </Toolbar>
        </AppBar>
      </Box>
      <div className="marginBotton">
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              elevation={20}
              transitionDuration={10}
              // onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      {children}

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          style={{ backgroundColor: "#1565c0" }}
          sx={{ boxShadow: 3 }}
        >
          <Typography variant="h6" align="center" style={{ color: "#ffff" }}>
            TJ <span>&#64;</span> 2021
          </Typography>
        </BottomNavigation>
      </Paper>
    </div>
  );
}


