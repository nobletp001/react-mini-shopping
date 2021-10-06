import React from 'react'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import './authpage.css'
import { logIn } from "../reduxComponent/shopping/auth/auth-actions";
export default function Authpage() {
     const dispatch = useDispatch();

    return (
      <div>
        <Box
          sx={{
            "& > :not(style)": {
              width: "80%",
              height: 490,
              maxWidth: 600,
            },
            justifyContent: "center",
            display: "flex",
            mt: 10,
          }}
        >
          <Paper elevation={3}>
            <img
              src="welcome.gif"
              className="img-fluid"
              height="80%"
              width="100%"
              alt="i"
            />
            <div className="typewriter">
              <p className="typing-erase">
                Welcome Guest My Name Is
                <span className="Name">Temitope Joshua!!! </span>
              </p>
            </div>
            <Button
              variant="contained"
              sx={{ width: "100%", mt:1 }}
              onClick={() => dispatch(logIn())}
            >
              Log In
            </Button>
          </Paper>
        </Box>
      </div>
    );
}

