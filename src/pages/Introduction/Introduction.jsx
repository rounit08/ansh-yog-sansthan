import ContactCard from "../../components/ContactCard/ContactCard";
import Footer from "../../components/Footer/Footer";
import IntroHero from "../../components/IntroductionHero/IntroHero";
import Navbar from "../../components/Navbar/Navbar";
import PersonalNotepad from "../../components/Notepad/PersonalNotepad";
import { TimelineMovement } from "../../components/Timeline/MovementTimeline";
import { TimelinePolitical } from "../../components/Timeline/Timeline";

const Introduction = () => {
  return (
    <div>
      <div className="bg-baseColor">
        <Navbar />
      </div>
      <IntroHero />
      <PersonalNotepad />
      <TimelinePolitical />
      <TimelineMovement />
      <ContactCard />
      <div className="bg-baseColor">
        <Footer />
      </div>
    </div>
  );
};

export default Introduction;
