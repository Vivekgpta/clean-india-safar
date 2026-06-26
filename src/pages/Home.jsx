import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import Gallery from "../components/Gallery/Gallery";
import AboutUs from "../components/AboutUs/AboutUs";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";
import Mission from "../components/Mission/Mission";
import FAQs from "../components/FAQs/FAQs";

export default function Home() {
  return (
    <MainLayout>
      <Hero />

      <AboutUs />

      <Mission />

      <Gallery />

      <CTA />
      <Testimonials />

      <FAQs/>
    </MainLayout>
  );
}
