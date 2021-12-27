import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

import { makeStyles } from "@material-ui/core";
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/material/Menu";

import { styled, alpha } from "@mui/material/styles";

import InputBase from "@mui/material/InputBase";

// import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.9),

  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(7),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "60ch",
    },
  },
}));

function PrimarySearchAppBar() {
  /*Selection of Cities DropDown*/
  //*City names for dropdown menu
  const cities = [
    "Visakhapatnam",
    "Hyderabad",
    "Delhi",
    "Pune",
    "Bnagalore",
    "Chennai",
    "Kolkata",
    "Kochi",
  ];
  const [city, setCity] = React.useState("");
  console.log(city);
  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#2e3147", height: "70px" }}
      >
        <Toolbar>
          <Search>
            <SearchIconWrapper>{/* <SearchIcon /> */}</SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for Movies, Events, Plays, Sports And Activities"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <FormControl sx={{ m: 1, minWidth: 90 }}>
              <Select
                value={city}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>City</em>
                </MenuItem>
                {cities.map((c) => (
                  <MenuItem value={c}>{c}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ "& button": { m: 1 } }}>
            <Button
              size="small"
              style={{ backgroundColor: "#f84464", color: "white" }}
            >
              Signup
            </Button>
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default PrimarySearchAppBar;
