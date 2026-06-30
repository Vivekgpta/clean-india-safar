import Hero from "../components/Hero/Hero";
import MainLayout from "../layouts/MainLayout";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";
import FAQs from "../components/FAQs/FAQs";
import Contact from "../components/Contact/Contact";
import AboutUs from "../components/AboutUs/AboutUs";
import Gallery from "../components/Gallery/Gallery";
import Mission from "../components/Mission/Mission";
// import VideoGallery from "../components/VideoGallery/VideoGallery";
import ReelsGallery from "../components/ReelsGallery/ReelsGallery";
import Donation from "../components/Donation/Donation";
import VolunteerForm from "../components/VolunteerForm/VolunteerForm";

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
      <ReelsGallery />

      <section id="volunteer">
        <CTA />
      </section>
      <section id="volunteerform">
        <VolunteerForm />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="donation">
        <Donation />
      </section>
      <section id="faqs">
        <FAQs />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </MainLayout>
  );
}
