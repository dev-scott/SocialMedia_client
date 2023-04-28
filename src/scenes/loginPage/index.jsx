import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import loginImg from "assets/boy.png";
import FlexBetween from "components/FlexBetween";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box
      p="0rem 6%"
      width="100%"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItem: "center"
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "100%",
          // backgroundColor: "blue"
        }}
      >
        <Form />
      </Box>
      <FlexBetween
        sx={{ width: "50%", height: "100%" }}
      >
        <img
          src={loginImg}
          style={{ width: "60%", heigh: "70%", objectFit: "cover" }}
          alt=""
        />
      </FlexBetween>
    </Box>
  );
};

export default LoginPage;
