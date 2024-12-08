import heroImage from "../../../public/images/AnshYogaSansthan/logo.png";
const IntroHero = () => {
  return (
    <div className="custom-container border-b-4 border-b-baseColor p-6 py-10 flex flex-col-reverse lg:flex-row text-center md:text-left md:justify-between items-center">
      <div className="md:w-2/3 flex flex-col gap-2">
        <div className="font-bold  text-baseColor text-xl md:text-4xl flex flex-col gap-2 ">
          <p>अंश योग संस्थान:</p>
        </div>
        <div className="md:w-[78%] text-base md:text-2xl leading-10 mt-2">
          <span className="italic">
            अंश योग संस्थान (रजि०){" "}
            <span className="text-baseColor"> वर्ष 2017, 1 अक्टूबर</span> से जन
            जन तक योग के प्रचार प्रसार के लिए कार्यरत रजिस्टर्ड संस्था है।
            संस्था योग के प्रसार के साथ ही{" "}
            <span className="text-baseColor">
              शिक्षा एवं साक्षरता, स्वास्थ्य एवं परिवार कल्याण, महिला विकास एवं
              सशक्तिकरण, व्यावसायिक प्रशिक्षण व कौशल विकास{" "}
            </span>
            के लिए कार्य करती है। अपने कार्यक्रमों के माध्यम उपरोक्त क्षेत्रों
            में निरंतर जागरूकता एवं सार्थकता प्रदान करते रहते हैं।
          </span>
        </div>
      </div>
      <div className="rounded-full md:w-1/3">
        <img
          className="rounded-full"
          alt="netaji image"
          src={heroImage}
          height="430px"
          width="430px"
        />
      </div>
    </div>
  );
};
export default IntroHero;
