import Navbar from "../../components/Navbar/Navbar";
import NagarPalika from "../../../public/images/AnshYogaSansthan/Ansh Yoga Sansthan Logo.jpg";

import Footer from "../../components/Footer/Footer";
const Donate = () => {
  return (
    <div>
      <div className="bg-baseColor">
        <Navbar />
      </div>

      {/* <Notepad /> */}
      <div className="flex flex-col md:flex-row items-center justify-center custom-container ">
        <img src={NagarPalika} className=" h-[500px] w-[500px]" />
        <span className="text-base lg:text-xl">
          <p>Bank Details:</p>
          Ansh Yog Sansthan <br />
          A/c-11341100000144 <br />
          IFSC Code: PSIB0021134 <br /> Bank: Punjab and Sindh Bank
          <br />
          Branch: Gola Gokarannath (80G में पंजीकृत)
        </span>
      </div>
      <div className="bg-baseColor">
        <Footer />
      </div>
    </div>
  );
};

export default Donate;
