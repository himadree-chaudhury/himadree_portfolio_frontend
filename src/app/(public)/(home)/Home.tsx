import About from "@/modules/Home/About";
import Contact from "@/modules/Home/Contact";
import Hero from "@/modules/Home/Hero";
import Services from "@/modules/Home/Services";
import TechStack from "@/modules/Home/TechStack";
import Testimonials from "@/modules/Home/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <TechStack />
      <About />
      {/* <FeaturedProjects /> */}
      <Services />
      <Contact />
      <Testimonials />
    </>
  );
};
export default Home;
