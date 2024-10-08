import heroImage from "../../../public/images/heroImage.jpg";
import linkArrow from "../../../public/images/rightArrow.png"
const HomeIntro = () => {
  return (
    <div className="custom-container flex flex-col-reverse md:flex-row items-center  gap-20 p-20">
      <div className="md:w-1/3">
        <img src={heroImage} alt="image" className="rounded-full" />
      </div>
      <div className="md:w-2/3 text-xl md:text-2xl">
        <span className="text-baseColor">
          <strong>विजय कुमार शुक्ल &apos;रिंकू&apos; (एडवोकेट)</strong>
        </span>{" "}
        एक समर्पित नेता हैं, जिन्होंने समाज सेवा और राजनीति में अपनी अनूठी पहचान
        बनाई है।
        <br />
        <br />
        <strong className="text-baseColor">
          नगर पालिका परिषद, गोला गोकर्णनाथ के अध्यक्ष
        </strong>{" "}
        के रूप में, उन्होंने स्थानीय विकास की नई राहें खोली हैं।{" "}
        <strong className="text-baseColor">भाजपा के जिला उपाध्यक्ष</strong> के
        रूप में उनकी सक्रियता ने पार्टी को मजबूती प्रदान की है।{" "}
        <strong className="text-baseColor">प्रदेश कोषाध्यक्ष, स्थानीय निकाय परिषद</strong> के रूप में,
        उन्होंने वित्तीय पारदर्शिता और विकास के प्रति अपनी प्रतिबद्धता को साबित
        किया है। <strong className="text-baseColor">माँ अन्नपूर्णा रसोई सेवा समिति के अध्यक्ष</strong> के
        रूप में, उन्होंने भूख मिटाने की दिशा में महत्वपूर्ण कदम उठाए हैं, जबकि{" "}
        <strong className="text-baseColor">गौशाला के मंत्री</strong> के रूप में गौ माता के प्रति अपनी
        जिम्मेदारी निभाई है। <strong className="text-baseColor">रिंकू जी का समर्पण और संघर्ष</strong>{" "}
        उन्हें न केवल एक सफल नेता बनाता है, बल्कि समाज के हर वर्ग के लिए एक
        प्रेरणा का स्रोत भी है।
        <a href="/introduction" className="flex items-center gap-2 text-xs md:text-sm italic">अधिक जानें
        <img  src={linkArrow} alt="link arrow" className="h-4 w-4 aspect-square"     style={{ transform: 'rotate(-20deg)' }} 
        />
         </a>
      </div>
    </div>
  );
};

export default HomeIntro;
