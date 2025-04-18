import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box sx={{ width: "100vw", height: "100vh", bgcolor: "black" }}>
        <Banner />
      </Box>
      <Box sx={{ width: "100vw", height: "100%", bgcolor: "black"}}>
        <Profile />
      </Box>
      <Box sx={{ width: "100vw", height: "100%", bgcolor: "black" }}>
        <Projects />
      </Box>
      <Footer />
    </>
  );
}
