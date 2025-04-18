"use client";
import { Box, Button } from "@mui/material";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { motion } from "framer-motion";
import Image from "next/image";

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, ease: "easeIn" },
          }}
        >
          <h1 className="text-3xl lg:text-6xl font-bold mb-8">
            Hi, I'm <span className="text-blue-500">Hieu Do</span>
          </h1>
          <p className="sm:text-sm md:text-2xl">
            I am a passionate front-end developer with a strong focus on
            creating user-friendly and visually appealing web applications.
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
        </motion.div>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          order: { xs: 2, md: 2 },
        }}
      >
        <Box sx={{ width: "100%", height: "100%" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2, duration: 0.4, ease: "easeIn" },
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
              }}
              className="w-[296px] xl:w-[498px] h-[296px] xl:h-[498px] mix-blend-lighten absolute"
            >
              <Image
                src="/pepsiman.png"
                priority
                quality={100}
                fill
                alt=""
                className="object-contain"
              />
            </motion.div>

            <motion.svg
              className="w-[300px] xl:w-[500px] h-[300px] xl:h-[500px]"
              fill="transparent"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="253"
                cy="253"
                r="250"
                stroke="oklch(62.3% 0.214 259.815)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: "24 0 0 0" }}
                animate={{
                  strokeDasharray: [
                    "15 120 25 25",
                    "16 25 92 72",
                    "4 250 22 22",
                  ],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "reverse",
                }}
              />
            </motion.svg>
          </motion.div>
        </Box>
      </Box>
    </section>
  );
};

export default Banner;
