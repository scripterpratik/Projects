import React, { useState } from "react";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import avatar from "../avatar.png";
import { makeStyles } from "@material-ui/core/styles";

//css Style
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#222",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "#ffff00",
  },
}));

const menuItems = [
  {
    ListIcon: <Home />,
    ListText: "Home",
  },
  {
    ListIcon: <AssignmentInd />,
    ListText: "Resume",
  },
  {
    ListIcon: <Apps />,
    ListText: "Projetcs",
  },
  {
    ListIcon: <ContactMail />,
    ListText: "Contact Me",
  },
];
const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });
  const toggleslider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const classes = useStyles();
  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleslider("right", false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Pratik" />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.ListIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.ListText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#ffff00" }}>
          <Toolbar>
            <IconButton onClick={toggleslider("right", true)}>
              <ArrowBack style={{ color: "#222" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "#222" }}>
              Portfolio
            </Typography>
            <MobilRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleslider("right", false)}
            >
              {sideList("right")}
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
