import facebookIcon from "../../../public/svg/fb.svg";
import instaIcon from "../../../public/svg/insta.svg";
const RasoiNotepad = () => {
    return (
      <div className="custom-container flex flex-col justify-center bg-yellow-50 border border-gray-300 rounded-lg p-6 max-w-lg mx-auto shadow-lg text-base md:text-2xl">
        
        <p className="text-gray-600 mb-4">
          गोला नगर में प्रथम बार जरूरतमंद विद्यार्थियों, श्रमिकों एवं श्रद्धालुओं के लिये 
          <span className="font-semibold text-baseColor"> 10 रूपये में भरपेट भोजन</span> के लिये 
          
          <span className="font-semibold text-baseColor"> माँ अन्नपूर्णा रसोई</span> का शुभारम्भ 
          <span className="font-semibold text-baseColor"> 01 नवम्बर 2023</span> को किया गया। जिसमें आज तक हजारों की संख्या में लोग 
          लाभान्वित हो चुके हैं। इसका संचालन माननीय अध्यक्ष जी द्वारा स्थापित 
          <span className="font-semibold text-baseColor"> &apos;माँ अन्नपूर्णा रसोई सेवा समिति&apos;</span> के अंतर्गत किया जा रहा है।
        </p>
  
        <p className="text-gray-600">पता:</p>
        <p className="text-gray-600">
          नीलकंठ मैदान महर्षि वाल्मीकि गली, गोला गोकर्णनाथ (खीरी)-262802
        </p>
        <div className="flex gap-2 items-center">
          <div><a href="https://www.facebook.com/profile.php?id=61561308777247&mibextid=ZbWKwL" target="_blank" rel="noreferrer"><img className="h-10 w-10 cursor-pointer" src={facebookIcon} alt="icon socialmedia"/></a></div>
          <div><a href="https://www.instagram.com/maaannapurnarasoigola?igsh=MW9qN2JjeHVtbDIxZw==" target="_blank" rel="noreferrer"><img className="h-8 w-8 cursor-pointer" src={instaIcon} alt="icon socialmedia"/></a></div>
        </div>
      </div>
    );
  };
  
  export default RasoiNotepad;
  