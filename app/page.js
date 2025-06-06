import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box sx={{ width: "100vw", height: "100vh", bgcolor: "black" }} id="home">
        <Banner />
      </Box>
      <Box sx={{ width: "100vw", height: "100%", bgcolor: "black"}} id="about">
        <Profile />
      </Box>
      <Box sx={{ width: "100vw", height: "100%", bgcolor: "black" }} id="projects">
        <Projects />
      </Box>
      <Box sx={{ width: "100vw", height: "100%", bgcolor: "black" }} id="contact">
        <Contact />
      </Box>
      <Footer />
    </>
  );
}
