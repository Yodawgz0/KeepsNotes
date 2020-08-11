import React, { Component } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Icon, Slide } from "@material-ui/core";
import { Image } from "react-bootstrap";
import "./header.less";



export default class Header extends Component {
  render() {
    return (
      <div  className="navbar">
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="open drawer">
              <MenuIcon />
            </IconButton>
            <IconButton></IconButton>
            <Image src="./keep.png" alt="Keeps" />
            <Typography variant="h6" noWrap className="font">
              Keeps
            </Typography>
            <div>
              <div>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search..." />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
