
import Hero from "../components/Hero/Hero";
import MainLayout from "../layouts/MainLayout";
import Navbar from "../components/Navbar/Navbar";
import Gallery from "./Gallery";
import AboutUs from "./AboutUs";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";
import Mission from "./Mission";
import FAQs from "../components/FAQs/FAQs";

export default function Home() {
  return (
    <MainLayout>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="mission">
        <Mission />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="volunteer">
        <CTA />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="faqs">
        <FAQs />
      </section>
    </MainLayout>
  );
}