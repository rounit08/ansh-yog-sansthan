import EightResolutionBanner from "../../../public/images/EightResolution/EightResolution.png"
const EightResolution = () => {
  
  return (
    <>
      <section className="custom-container mt-8 h-1 relative bottom-0 bg-baseColor">
        <p className="absolute text-base md:text-xl font-serif bg-baseColor rounded-b-xl font-medium text-white px-10 py-5">
        अष्ट संकल्प अभियान 
        </p>
      </section>
      <section className="custom-container flex flex-col items-center md:flex-row    gap-5 relative mt-20">
         <img  src={EightResolutionBanner} alt="eight resolution banner" title="eight resolution banner" className="h-auto w-[38vw]"/>
         <div className="flex flex-col gap-6 items-center md:items-start">
         <h3 className="text-baseColor italic font-semibold text-xl md:text-3xl">
         प्रत्येक मानव जीवन का लक्ष्य एक स्वस्थ, सुखी और समृद्ध समाज का निर्माण करना है। इस दिशा में, आठ महत्वपूर्ण संकल्पों को अपने जीवन में अपनाने का संकल्प लेने हेतु नीचे दिए गए बटन पर क्लिक करें!
         </h3>  
         <button className="w-full rounded-lg text-baseColor font-bold italic font-mono   p-4 border-2 border-baseColor"><a href="/eight-resolution">यहाँ क्लिक करें। </a></button>

         <h3 className="text-baseColor italic font-semibold text-xl md:text-3xl">

         इन संकल्पों के माध्यम से, हम एक मजबूत, संगठित और नैतिक समाज की दिशा में कदम बढ़ा सकते हैं। आइए, हम सब मिलकर इस यात्रा की शुरुआत करें!

         </h3>
         </div>
         
      </section>
    </>
  );
};

export default EightResolution