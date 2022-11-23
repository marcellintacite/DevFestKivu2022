import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import logo from "./../assets/logo.png";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: "#fff",
          boxShadow: "4px 7px 5px -3px rgba(207,207,207,0.31)",
        }}
      >
        <Toolbar>
          <img src={logo} width={50} alt="logo" />
          <Typography
            pl={3}
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
            color="#333"
          >
            DevFest Kivu
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
