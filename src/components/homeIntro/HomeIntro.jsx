import heroImage from "../../../public/images/AnshYogaSansthan/yoga.pngs";
const HomeIntro = () => {
  return (
    <div className="custom-container flex flex-col-reverse md:flex-row items-center  gap-20 p-20">
      <div className="md:w-1/3">
        <img src={heroImage} alt="image" className="rounded-full" />
      </div>
      <div className="md:w-2/3 text-xl md:text-2xl">
        <span className="text-baseColor">
          <strong>योग: शारीरिक, मानसिक और आत्मिक संतुलन का रहस्य</strong>
        </span>{" "}
        <br />
        "योग केवल व्यायाम नहीं, बल्कि जीवन जीने की कला है। यह प्राचीन भारतीय
        परंपरा का हिस्सा है, जो शरीर, मन और आत्मा के बीच सामंजस्य स्थापित करती
        है। योग के नियमित अभ्यास से न केवल शारीरिक स्वास्थ्य बल्कि मानसिक शांति
        और आत्मिक जागरूकता भी प्राप्त होती है।
        <br />
        <br />
        <ul>
          {" "}
          <strong className="text-baseColor">योग के लाभ: </strong>
        </ul>
        <li>
          शारीरिक स्वास्थ्य: योग मांसपेशियों को मजबूती और लचीलापन प्रदान करता
          है।{" "}
        </li>{" "}
        <li>
          मानसिक शांति: ध्यान और प्राणायाम तनाव को कम कर मन को शांत करते हैं।
        </li>
        <li>
          आध्यात्मिक जागरूकता: योग आत्मा से जुड़ने और जीवन में संतुलन लाने का
          साधन है।
        </li>
        <li>
          {" "}
          रोगों की रोकथाम: योग उच्च रक्तचाप, मधुमेह और हृदय रोग जैसी बीमारियों
          से बचाव करता है।
        </li>
        <ul>
          <strong className="text-baseColor">योग आसन और उनके फायदे</strong>
        </ul>
        <li>
          ताड़ासन : शरीर की मुद्रा को सही करता है और रीढ़ को मजबूत बनाता है।
        </li>{" "}
        <li>
          भुजंगासन : पीठ के दर्द को कम करता है और रीढ़ की हड्डी को लचीला बनाता
          है।
        </li>
        <li> बालासन : मन को शांत करता है और थकान को दूर करता है।</li>
        <li>
          {" "}
          वृक्षासन : संतुलन में सुधार करता है और एकाग्रता बढ़ाता है।
        </li>{" "}
        <li> सूर्य नमस्कार : पूरे शरीर को सक्रिय और ऊर्जावान बनाता है।</li>
      </div>
    </div>
  );
};

export default HomeIntro;
