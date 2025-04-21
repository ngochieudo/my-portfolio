import { Button, Divider, Tooltip, Typography } from "@mui/material";
import React from "react";

import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Contact = () => {
  return (
    <>
      <Typography
        sx={{
          marginBottom: "20px",
          fontWeight: "bold",
          fontSize: { xs: "2rem", md: "2.5rem" },
          textAlign: "center",
        }}
      >
        Contact Me
      </Typography>
      <Typography
        sx={{
          marginBottom: "20px",
          fontSize: "0.875rem",
          textAlign: "center",
          color: "gray",
        }}
      >
        Here are my contact information
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 rounded-2xl mx-auto w-10/12">
        <div className="flex-col justify-center items-center">
          <div className="rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3880375918743!2d105.83115597625084!3d21.01715418062923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab83907b09d5%3A0x31426b71de4e69e6!2zMjQgTmdoLiA3OSBOZy4gVGjhu5UgUXVhbiwgVGjhu5UgUXVhbiwgxJDhu5FuZyDEkGEsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1745237547007!5m2!1svi!2s"
              width="100%"
              height="350px"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="space-y-2 text-white mt-5">
            <div>
              <Tooltip title="Email of Hieu Do" arrow placement="top">
                <a href="mailto:ngochieudo2001@gmail.com">
                  <button className="w-[50px] h-[50px] border-1 rounded-full transition duration-300 mr-5 cursor-pointer">
                    <EmailIcon sx={{ fontSize: "1rem" }} />
                  </button>
                  <span className="hover:underline cursor-pointer">
                    ngochieudo2001@gmail.com
                  </span>
                </a>
              </Tooltip>
            </div>

            <div>
              <Tooltip title="Facebook of Hieu Do" arrow placement="top">
                <a
                  href="https://www.facebook.com/hieu.o.335137"
                  target="_blank"
                >
                  <button className="w-[50px] h-[50px] border-1 rounded-full transition duration-300 mr-5 cursor-pointer">
                    <FacebookIcon sx={{ fontSize: "1rem" }} />
                  </button>
                  <span className="hover:underline cursor-pointer">
                    Hiếu Đỗ
                  </span>
                </a>
              </Tooltip>
            </div>

            <div>
              <Tooltip title="Linkedin of Hieu Do" arrow placement="top">
                <a href="https://www.linkedin.com/in/peps1man/" target="_blank">
                  <button className="w-[50px] h-[50px] border-1 rounded-full transition duration-300 mr-5 cursor-pointer">
                    <LinkedInIcon sx={{ fontSize: "1rem" }} />
                  </button>
                  <span className="hover:underline cursor-pointer">
                    Hieu Do
                  </span>
                </a>
              </Tooltip>
            </div>
          </div>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <Button
            variant="outlined"
            size="large"
            href="#contact"
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
              textAlign: "center",
              width: "100%",
            }}
          >
            Send Message <ChevronRightIcon />
          </Button>
        </form>
      </div>
    </>
  );
};

export default Contact;
