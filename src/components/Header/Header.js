import React from "react";
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
import NotificationsIcon from "@material-ui/icons/Notifications";
import RefreshIcon from "@material-ui/icons/Refresh";
import SettingsIcon from "@material-ui/icons/Settings";
import { Image } from "react-bootstrap";
import { useStyles } from "./headerstyles.js";
import MoreIcon from "@material-ui/icons/MoreVert";

const Header = () => {
  const [anchorE1, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorE1, setMoileMoreAnchorE1] = React.useState(null);

  const isSettingsMenuOpen = Boolean(anchorE1);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorE1);

  const settingsmenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const mobileMenuclose = () => {
    setMoileMoreAnchorE1(null);
  };

  const menuclose = () => {
    setMoileMoreAnchorE1();
    setAnchorEl(null);
  };

  const mobilemenu = (event) => {
    setMoileMoreAnchorE1(event.currentTarget);
  };

  const settingsmenuID = "primary-settings-menu";
  const renderSettingsMenu = (
    <Menu
      anchorEl={anchorE1}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      id={settingsmenuID}
      open={isSettingsMenuOpen}
      onClose={menuclose}
    >
      <MenuItem onClick={menuclose}>Settings</MenuItem>
      <MenuItem onClick={menuclose}>Disbale Dark Theme</MenuItem>
      <MenuItem onClick={menuclose}>Send FeedBack</MenuItem>
      <MenuItem onClick={menuclose}>Help</MenuItem>
      <MenuItem onClick={menuclose}>App Downloads</MenuItem>
      <MenuItem onClick={menuclose}>Keyboard Shortcuts</MenuItem>
    </Menu>
  );

  const mobilemenuID = "primary-mobile-menu";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorE1}
      keepMounted
      id={mobilemenuID}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={isMobileMenuOpen}
      onClose={mobileMenuclose}
    >
      <MenuItem>
        <IconButton aria-label="refresh" color="inherit">
          <RefreshIcon />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="notifications" color="inherit">
          <Badge badgeContent={17} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="settings"
          aria-controls={settingsmenuID}
          aria-haspopup="true"
          color="inherit"
          onClick={settingsmenu}
        >
          <SettingsIcon />
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="profile" color="inherit">
          <AccountCircle />
        </IconButton>
      </MenuItem>
    </Menu>
  );

  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <IconButton></IconButton>
          <Image src="./keep.png" alt="Keeps" />
          <Typography variant="h6" className={classes.title} noWrap>
            Keeps
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}></div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="refresh" color="inherit">
              <RefreshIcon />
            </IconButton>
            <IconButton aria-label="notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              aria-label="settings"
              aria-controls={settingsmenuID}
              aria-haspopup="true"
              color="inherit"
              onClick={settingsmenu}
            >
              <SettingsIcon />
            </IconButton>
            <IconButton aria-label="profile" color="inherit">
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show-more"
              aria-controls={mobilemenuID}
              aria-haspopup="true"
              onClick={mobilemenu}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderSettingsMenu}
      {renderMobileMenu}
    </div>
  );
};
export default Header;
