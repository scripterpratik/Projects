import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../avatar.png";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";

// CSS Styles

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "#ffff00",
  },
  subtitle: {
    color: "#ffff40",
    marginBottom: "3rem",
  },
  centercont: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.centercont}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Pratik" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Pratik Chakraborty"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["Cloud Architect", "Devops Engineer", "Automation Guy"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
