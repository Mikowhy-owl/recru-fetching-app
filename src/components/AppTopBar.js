import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router-dom";

function AppTopBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="relative" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6">🦉</Typography>
        <Typography
          variant="h6"
          className={classes.title}
          onClick={() => props.history.replace("/")}
        >
          Recrutation app
        </Typography>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuIcon fontSize="large" style={{ color: "white" }} />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => props.history.replace("/")}>Home</MenuItem>
          <MenuItem onClick={() => props.history.replace("/about-us")}>
            About us
          </MenuItem>
          <MenuItem color="secondary" onClick={() => props.logout()}>
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
export default withRouter(AppTopBar);

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    paddingLeft: theme.spacing(2),
    cursor: "pointer",
  },
}));
