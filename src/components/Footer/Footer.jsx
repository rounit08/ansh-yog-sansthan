import facebookIcon from "../../../public/svg/fb.svg";
import instaIcon from "../../../public/svg/insta.svg";
import BJPimage from "../../../public/images/bjp.png";
import nagarPalikeLogo from "../../../public/images/NagarPalikaGola.jpg";
import MaaAnnapurnaRasoiLogo from "../../../public/images/MaaAnnapurnaRasoi.jpg";
import youtubeIcon from "../../../public/svg/youtube.svg"
import twitterLogo from "../../../public/images/x-logo.webp"
const Footer = () => {
  return (
    <footer className="custom-container relative flex flex-col lg:flex-row justify-between items-start lg:items-center p-10 lg:py-20 text-white bg-gradient-to-r from-black via-gray-800 to-black">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <h3 className="text-xl font-semibold mb-4">पता:</h3>
        <div className="text-base leading-relaxed flex flex-col gap-10">
          <div><p>मो० कुम्हारन टोला</p>
          <p>गोला गोकर्णनाथ (खीरी), उत्तर प्रदेश-262802</p></div>
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
      <div className="w-full lg:w-1/2 grid grid-cols-3  justify-items-center">
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
    </footer>
  );
};

export default Footer;
