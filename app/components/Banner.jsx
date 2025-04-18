import { Box, Button } from "@mui/material";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Banner = () => {
  const words = [
    {
      text: "Front",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "End",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Developer",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    
    <section
      className="flex flex-col md:flex-row text-center md:text-left items-center justify-center h-screen bg-linear-[120deg,black_70%,blue,teal] text-white gap-7 px-7"
      id="home"
    >
      
      <Box
        sx={{
          order: { xs: 2, md: 1 },
          maxWidth: { xs: "100%", md: "60%" },
        }}
      >
        <h1 className="text-3xl lg:text-6xl font-bold mb-8">
          Hi, I'm <span className="text-blue-500">Hieu Do</span>
        </h1>
        <p className="sm:text-sm md:text-2xl">
          I am a passionate front-end developer with a strong focus on creating
          user-friendly and visually appealing web applications.
        </p>

        <Button
          variant="outlined"
          size="large"
          sx={{
            marginTop: "20px",
            color: "white",
            borderColor: "white",
            "&:hover": {
              backgroundColor: "white",
              color: "black",
            },
            textTransform: "none",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Contact Me Now <ChevronRightIcon />
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          order: { xs: 2, md: 2 },
        }}
      >
        <Box
          sx={
            {
              // border: "2px solid white",
              // borderRadius: "50%",
            }
          }
        >
          <img
            src="s"
            alt="Banner"
            className="max-w-full h-full object-contain max-h-[450px]"
          />
        </Box>
      </Box>
    </section>
  );
};

export default Banner;
