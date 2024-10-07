import ContactCard from "../../components/ContactCard/ContactCard";
import Footer from "../../components/Footer/Footer";
import IntroHero from "../../components/IntroductionHero/IntroHero";
import Navbar from "../../components/Navbar/Navbar";
import { TimelineMovement } from "../../components/Timeline/MovementTimeline";
import { TimelinePolitical } from "../../components/Timeline/Timeline";

const Introduction = () => {
  return (
    <div>
      <div className="bg-baseColor">
        <Navbar />
      </div>
      <IntroHero />
      <TimelinePolitical />
      <TimelineMovement />
      <ContactCard />
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Introduction;
