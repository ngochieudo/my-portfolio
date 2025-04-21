import React from "react";
import Skills from "./Skills";
import { Box } from "@mui/material";
import Timeline from "./Timeline";

const Profile = () => {
  
  return (
    <Box sx={{ margin: "0 auto", padding: "2.5rem"}} id="about">
      <Skills/>
      <Timeline/>
    </Box>
  );
};

export default Profile;
