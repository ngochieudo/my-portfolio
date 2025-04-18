import { Box, Tooltip, Typography } from "@mui/material";
import React from "react";

const Skills = () => {
  const techs = [
    { tooltip: "HTML5", src: "techs/html5.png" },
    { tooltip: "CSS3", src: "techs/css3.png" },
    { tooltip: "JavaScript", src: "techs/javascript.png" },
    { tooltip: "React", src: "techs/react.png" },
    { tooltip: "Next.js", src: "techs/nextjs.png" },
    { tooltip: "Tailwind CSS", src: "techs/tailwindcss.png" },
    { tooltip: "Material UI", src: "techs/mui.png" },
  ];
  return (
    <Box id="skills" sx={{ marginBottom: "8rem"}}>
        <Typography sx={{ marginBottom: "20px", fontWeight: "bold", fontSize: {xs: "2rem", md: "2.5rem"}, textAlign: "center"}}>
            Skills & Technologies
        </Typography>
        <Typography
                  sx={{
                    marginBottom: "20px",
                    fontSize: '0.875rem',
                    textAlign: "center",
                    color: "gray",
                  }}
                >
                  The tech stack that I have worked with
                </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, minmax(0, 1fr))",
            sm: "repeat(3, minmax(0, 1fr))",
            lg: "repeat(4, minmax(0, 1fr))",
            xl: "repeat(6, minmax(0, 1fr))",
          },
          gap: "2rem",
        }}
      >
        {techs.map((tech, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "#1e1e1e",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Tooltip title={tech.tooltip} placement="top">
              <img src={tech.src} alt={tech.tooltip} width="50" height="50" style={{fontSize: "24px"}}/>
            </Tooltip>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
