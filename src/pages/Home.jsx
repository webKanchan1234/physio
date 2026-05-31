import Hero from "../components/Hero";
import Features from "../components/Features";
import Services from "../components/Services";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Gallery from "../components/Gallery";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>

      <Hero />

      <Features />

      <Services />
<Gallery />
      <Team />

      <Testimonials />

      <CTA />

    </MainLayout>
  );
};

export default Home;