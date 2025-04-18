import React from "react";
import Skills from "./Skills";
import { Box } from "@mui/material";

const Profile = () => {
  
  return (
    <Box sx={{ margin: "0 auto", padding: "2.5rem"}} id="profile">
      <Skills/>
    </Box>
  );
};

export default Profile;
