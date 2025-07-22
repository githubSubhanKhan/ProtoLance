import { motion } from "framer-motion";
import AboutUs from "./AboutUs";
import Hero from "./Hero";
import Navbar from "../ui/Navbar";
import WhyUs from "./WhyUs";
import FooterSection from "./FooterSection";
import FacultyReviews from "./FacultyReviews";
import Services from "./Services";
import Testimonials from "./Testimonials";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const LandingPage = () => {
  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 bg-offwhitecustom`}
      id="home"
    >
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      {/* <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <Hero />
      </motion.div> */}

      {/* About Us Section */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <Services/>
      </motion.div>

      {/* Faculty Reviews Section */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <AboutUs/>
      </motion.div>

      {/* Why Us Section */}
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <Testimonials/>
      </motion.div>

      {/* Footer */}
      {/* <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <FooterSection />
      </motion.div> */}
    </div>
  );
};

export default LandingPage;
