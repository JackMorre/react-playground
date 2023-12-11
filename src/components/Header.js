import { useState } from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import NotificationList from "./NotificationList";

const notifications = [
  {
    type: "reactionPost",
    data: {
      name: "Mark Webber",
      profileImg: "",
      post: "My first tournament today",
    },
    date: new Date(),
    read: false,
  },
  {
    type: "follow",
    data: { name: "Angela Gray", profileImg: "" },
    date: new Date(),
    read: false,
  },
  {
    type: "join",
    data: { name: "Jacob Thompson", profileImg: "", group: "Chess Club" },
    date: new Date(),
    read: false,
  },
  {
    type: "pm",
    data: {
      name: "Rizky Hasanuddin",
      profileImg: "",
      message:
        "Hey man, thanks for setting up the chess club. I am really looking forward to learning and getting my teeth stuck in.",
    },
    date: new Date(),
    read: true,
  },
  {
    type: "commentPhoto",
    data: { name: "Kimberly Smith", profileImg: "", photoURL: "lol" },
    date: new Date(),
    read: true,
  },
  {
    type: "reactionPost",
    data: {
      name: "Nathan Peterson",
      profileImg: "",
      post: "5 end-game strategies to increase your win rate",
    },
    date: new Date(),
    read: true,
  },
  {
    type: "left",
    data: { name: "Anna Kim", profileImg: "", group: "Chess Club" },
    date: new Date(),
    read: true,
  },
];

const pages = ["Products", "Pricing", "Blog"];

function ResponsiveAppBar() {
  const [openNotifications, setOpenNotifications] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [data, setData] = useState(notifications);

  const unreadNote = data.filter((note) => {
    if (note.read === false) {
      return note;
    }
    return undefined;
  });

  function handleReadAll() {
    const newData = data.map((note) => {
      if (note.read === false) {
        note.read = true;
        return note;
      } else return note;
    });
    setData(newData);
  }

  // const [invisible, setInvisible] = React.useState(false);

  // const handleBadgeVisibility = () => {
  //   setInvisible(!invisible);
  // };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    console.log(unreadNote.length);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function toggleNotifications() {
    setOpenNotifications((note) => !note);
  }

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <div>
              <Badge
                color="error"
                variant="dot"
                invisible={unreadNote.length < 1 ? true : false}
                onClick={() => {
                  toggleNotifications();
                }}
              >
                <NotificationsIcon sx={{ cursor: "pointer" }} />
              </Badge>
              {/* <FormControlLabel
              sx={{ color: "text.primary" }}
              control={
                <Switch checked={!invisible} onChange={handleBadgeVisibility} />
              }
              label="Show Badge"
            /> */}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      {openNotifications === true && (
        <NotificationList
          notifications={data}
          handleReadAll={handleReadAll}
          unreadNote={unreadNote.length}
        />
      )}
    </>
  );
}
export default ResponsiveAppBar;
