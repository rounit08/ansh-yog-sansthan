import facebookIcon from "../../../public/svg/fb.svg";
import instaIcon from "../../../public/svg/insta.svg";
import BJPimage from "../../../public/images/bjp.png";
import nagarPalikeLogo from "../../../public/images/NagarPalikaGola.jpg";
import MaaAnnapurnaRasoiLogo from "../../../public/images/MaaAnnapurnaRasoi.jpg";
import youtubeIcon from "../../../public/svg/youtube.svg";
import twitterLogo from "../../../public/images/x-logo.webp";
import linkArrow from "../../../public/svg/right-arrow-link.svg";

const Footer = () => {
  return (
    <footer className="custom-container relative flex flex-col  p-10 lg:py-20 text-white bg-gradient-to-r from-black via-gray-800 to-black">
      {/* Left Side */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <h3 className="text-xl font-semibold mb-4">पता:</h3>
          <div className="text-base leading-relaxed flex flex-col gap-10">
            <div>
              <p>मो० कुम्हारन टोला</p>
              <p>गोला गोकर्णनाथ (खीरी), उत्तर प्रदेश-262802</p>
            </div>
            <div>
              <p>नगर पालिका परिषद लखीमपुर रोड,</p>
              <p>गोला गोकर्णनाथ (खीरी), उत्तर प्रदेश-262802</p>
            </div>
          </div>
          <div className="mt-6 flex items-center space-x-5">
            <a
              href="https://www.instagram.com/vijayshuklarinku?igsh=ZjV3MWE5aDEzbW1r"
              target="_blank"
              rel="noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <img
                src={instaIcon}
                alt="Instagram Icon"
                className="inline-block  cursor-pointer"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/vijayshukla.rinku?mibextid=ZbWKwL"
              className="transition-transform duration-300 hover:scale-110"
            >
              <img
                src={facebookIcon}
                alt="Facebook Icon"
                className="inline-block w-8 cursor-pointer"
              />
            </a>
            <a
              href="https://youtube.com/@rinkushuklabjp"
              target="_blank"
              rel="noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <img
                src={youtubeIcon}
                alt="youtube Icon"
                className="inline-block w-8 cursor-pointer"
              />
            </a>
            <a
              href="https://x.com/RinkuShuklabjp?t=Ahj2eXtD5t4_1ahQ2a2sZg&s=09"
              target="_blank"
              rel="noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <img
                src={twitterLogo}
                alt="twitter Icon"
                className="inline-block w-8 cursor-pointer"
              />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex gap-2 flex-row-reverse items-center  justify-items-center">
          <div className="flex">
            <a
              href="https://www.facebook.com/nppgolakheri?mibextid=ZbWKwL"
              target="_blank"
            >
              <img
                src={nagarPalikeLogo}
                alt="Nagar Palika Logo"
                className="w-24 h-auto transition-transform duration-300 hover:scale-110"
              />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61561308777247&mibextid=ZbWKwL"
            >
              <img
                src={MaaAnnapurnaRasoiLogo}
                alt="Maa Annapurna Rasoi Logo"
                className="w-24 h-auto transition-transform duration-300 hover:scale-110"
              />
            </a>
            <a href="https://www.bjp.org/home" target="_blank">
              <img
                src={BJPimage}
                alt="BJP Logo"
                className="w-24 h-auto transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>
          <div className="flex flex-col gap-3 font-sans italic text-base md:text-xl">
            <a
              className="flex gap-2 items-center"
              href="https://bjpsadasyata.narendramodi.in/"
              target="_blank"
            >
              भाजपा सदस्यता ग्रहण करें
              <img
                src={linkArrow}
                alt="link arrow"
                className="h-4 w-4 aspect-square"
                style={{ transform: "rotate(-20deg)" }}
              />
            </a>
            <a
              className="flex gap-2 items-center"
              href=" https://kumbh.gov.in/"
              target="_blank"
            >
              महाकुंभ 2025
              <img
                src={linkArrow}
                alt="link arrow"
                className="h-4 w-4 aspect-square"
                style={{ transform: "rotate(-20deg)" }}
              />
            </a>
            <a
              className="flex gap-2 items-center"
              href="https://bharatkeveer.gov.in/viewMartyrsGalleryPage"
              target="_blank"
            >
              भारत के वीर
              <img
                src={linkArrow}
                alt="link arrow"
                className="h-4 w-4 aspect-square"
                style={{ transform: "rotate(-20deg)" }}
              />
            </a>
            <a
              className="flex gap-2 items-center"
              href="https://kheri.nic.in/ "
              target="_blank"
            >
              खीरी, उत्तर प्रदेश
              <img
                src={linkArrow}
                alt="link arrow"
                className="h-4 w-4 aspect-square"
                style={{ transform: "rotate(-20deg)" }}
              />
            </a>
            <a
              className="flex gap-2 items-center"
              href="https://golatourism.com/"
              target="_blank"
            >
              गोला गोकर्णनाथ
              <img
                src={linkArrow}
                alt="link arrow"
                className="h-4 w-4 aspect-square"
                style={{ transform: "rotate(-20deg)" }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="text-gray-500 text-center mt-10 flex flex-col gap-5">
        <hr />
        Copyright Vijay Shukla Rinku BJP - 2024
        <br />
        <p>
        Website developed by <a  target="_blank" href="https://www.linkedin.com/in/rounit08">Rounit Sinha</a></p>
      </div>
    </footer>
  );
};

export default Footer;
