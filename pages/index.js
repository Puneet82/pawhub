// import components
import Pets from "../components/Pets";
import Hero from "../components/Hero";
import Services from "../components/Services";

import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Adoption from "@/components/Adoption";
const Home = () => {
  return (
    <div className="overflow-hidden relative">
      <Hero />
      <Pets />
      <Services />
      <Adoption />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
