import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Select,
  Typography,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery
} from "@mui/material";

import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close
} from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import state, { setLogout, setMode } from "state";

const NavBar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const fullName = `Dev-scott`;

  return (
    <FlexBetween padding="1rem 7%" backgroundColor={alt}>
      <FlexBetween gap="1.5rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="blue"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer"
            }
          }}
        >
          Djos-Me
        </Typography>
        {isNonMobileScreens &&
          <FlexBetween
            gap="3rem"
            padding="0.2rem 1.5rem"
            borderRadius="10px"
            backgroundColor={neutralLight}
          >
            <InputBase placeholder="Search ..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>}
      </FlexBetween>

      {/*DESKTOP NAV */}

      {isNonMobileScreens
        ? <FlexBetween gap="2rem">
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === "dark"
                ? <DarkMode sx={{ fontSize: "25px" }} />
                : <LightMode sx={{ color: dark, fontSize: "25px" }} />}
            </IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem"
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight
                  }
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>
                    {fullName}
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        : <IconButton onClick={() => setIsMobileMenu(!isMobileMenu)}>
            <Menu />
          </IconButton>}

      {/* MOBILE NAV */}
      {!isNonMobileScreens &&
        isMobileMenu &&
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="400px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton onClick={() => setIsMobileMenu(!isMobileMenu)}>
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark"
                ? <DarkMode sx={{ fontSize: "25px" }} />
                : <LightMode sx={{ color: dark, fontSize: "25px" }} />}
            </IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem"
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight
                  }
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>
                    {fullName}
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>}
    </FlexBetween>
  );
};

export default NavBar;
