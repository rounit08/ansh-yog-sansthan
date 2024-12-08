import Footer from "../../components/Footer/Footer";
import IntroHero from "../../components/IntroductionHero/IntroHero";
import Navbar from "../../components/Navbar/Navbar";
import PersonalNotepad from "../../components/Notepad/PersonalNotepad";
import YogaNotepad from "../../components/Notepad/YogaNotepad";

const Introduction = () => {
  return (
    <div>
      <div className="bg-baseColor">
        <Navbar />
      </div>
      <IntroHero />
      <PersonalNotepad />
      <YogaNotepad />
      <div className="bg-baseColor">
        <Footer />
      </div>
    </div>
  );
};

export default Introduction;
