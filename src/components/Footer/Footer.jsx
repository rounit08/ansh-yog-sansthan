import logo from "../../../public/images/AnshYogaSansthan/Ansh Yoga Sansthan Logo.jpg";

const Footer = () => {
  return (
    <footer className="custom-container relative flex flex-col  p-10 lg:py-20 text-white bg-baseColor">
      {/* Left Side */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <h3 className="text-xl font-semibold mb-4">संपर्क:</h3>
          <div className="text-base leading-relaxed flex flex-col gap-10">
            <div>
              <p>लक्ष्मी नगर कॉलोनी, लखीमपुर रोड,</p>
              <p>गोला गोकर्णनाथ (खीरी), उत्तर प्रदेश-262802</p>
              <p>
                ईमेल:{" "}
                <a className="italic underline" href="mailto:dkt4708@gmail.com">
                  dkt4708@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex gap-2 flex-row-reverse items-center  justify-items-center">
          <img src={logo} height="150px" width="150px" />
        </div>
      </div>
      <div className="text-white text-center mt-10 flex flex-col gap-2">
        <hr />
        Copyright Ansh Yoga Sansthan - 2024
        <br />
        <p>
          Website developed by{" "}
          <a target="_blank" href="https://www.linkedin.com/in/rounit08">
            Rounit Sinha
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
