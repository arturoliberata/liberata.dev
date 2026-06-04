import "./App.css";
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Work from "./components/Work";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <Hero></Hero>
      <Work></Work>
      <Bio></Bio>
      <Footer></Footer>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
