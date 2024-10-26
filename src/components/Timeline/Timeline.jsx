import { Timeline } from "../ui/timeline";

export function TimelinePolitical() {
  const data = [
    {
      title: "सन् 1990",
      content: (
        <div>
          <p className="text-neutral-800  text-sm md:text-3xl font-normal mb-8">
            अखिल भारतीय विद्यार्थी परिषद का सदस्य बना और राष्ट्रीय स्वयंसेवक संघ
            से जुड़ा।{" "}
          </p>
        </div>
      ),
    },
    {
      title: "सन् 1991",
      content: (
        <div>
          <p className="text-neutral-800  text-sm md:text-3xl font-normal mb-8">
          अखिल भारतीय विद्यार्थी परिषद पब्लिक इण्टर कॉलेज इकाई का मत्री बना
          </p>
        </div>
      ),
    },
    {
      title: "सन् 1993-94",
      content: (
        <div>
          <p className="text-neutral-800  text-sm md:text-3xl font-normal mb-4">
            केन ग्रोअर्स नेहरू डिग्री कॉलेज गोला में विद्यार्थी परिषद के बैनर
            तले छात्र संघ उपाध्यक्ष का चुनाव लड़कर विजय हुए। सन् 1995 में अखिल
            भारतीय विद्यार्थी परिषद की तहसील इकाई का प्रमुख बना।{" "}
          </p>
        </div>
      ),
    },

    {
      title: "सन् 1995-96",
      content: (
        <div>
          <p className="text-neutral-800  text-sm md:text-3xl font-normal mb-4">
            भारतीय विद्यार्थी परिषद के बैनर तले केन ग्रोअर्स नेहरू डिग्री कॉलेज
            गोला में छात्रसंघ का चुनाव लड़ा जिसमें मात्र 17 वोटों से पराजित हुआ।{" "}
          </p>
        </div>
      ),
    },
    {
      title: "सन् 1996",
      content: (
        <div>
          <p className="text-neutral-800  text-sm md:text-3xl font-normal mb-4">
            भारतीय जनता युवा मोर्चा, गोला का नगर उपाध्यक्ष मनोनीत हुआ। सन् 1998
            में पुनः भारतीय जनता युवा मोर्चा, गोला का नगर उपाध्यक्ष मनोनीत हुआ।{" "}
          </p>
        </div>
      ),
    },
    {
      title: "सन् 2000",
      content: (
        <div>
          <p className="text-neutral-800  text-sm md:text-3xl font-normal mb-4">
            भारतीय जनता पार्टी, गोला नगर का महामंत्री मनोनीत हुआ।{" "}
          </p>
        </div>
      ),
    },
    {
      title: "सन् 2002",
      content: (
        <div>
          <p className="text-neutral-800  text-sm md:text-3xl font-normal mb-4">
            जिला पशु क्रूरता निर्वारण समिति में सदस्य के रूप में शासन द्वारा
            नामित हुआ।{" "}
          </p>
        </div>
      ),
    },
    {
      title: "सन् 2004",
      content: (
        <div>
          <p className="text-neutral-800  text-sm md:text-3xl font-normal mb-4">
            भारतीय जनता युवा मोर्चा का जिलाध्यक्ष बनाया गया।{" "}
          </p>
        </div>
      ),
    },
    {
      title: " सन् 2007 से 2013 ",
      content: (
        <div>
          <p className="text-neutral-800  text-sm md:text-3xl font-normal mb-4">
            3 बार भारतीय जनता पार्टी का जिला महामंत्री के रूप कार्य किया।{" "}
          </p>
        </div>
      ),
    },
    {
      title: "सन् 2013",
      content: (
        <div>
          <p className="text-neutral-800  text-sm md:text-3xl font-normal mb-4">
            गोवंश विकास प्रकोष्ठ के प्रदेश सह संयोजक के रूप में कार्य किया।{" "}
          </p>
        </div>
      ),
    },
    {
      title: " सन् 2016",
      content: (
        <div>
          <p className="text-neutral-800  text-sm md:text-3xl font-normal mb-4">
            भारतीय जनता पार्टी का लखीमपुर विधानसभा प्रभारी बना जिसमें पार्टी
            चुनाव जीती तथा जिले में सर्वाधिक 1,22,677 मत प्राप्त हुए।{" "}
          </p>
        </div>
      ),
    },
    {
      title: "सन् 2017",
      content: (
        <div>
          <p className="text-neutral-800  text-sm md:text-3xl font-normal mb-4">
            नगर पालिका परिषद गोला पार्टी के घोषित प्रत्याशी के रूप में चुनाव
            लड़ा जिसमें 7800 मत प्राप्त कर द्वितीय स्थान पर रहा जबकि 2012 में
            पार्टी प्रत्याशी को 1800 मत मिले थे।{" "}
          </p>
        </div>
      ),
    },
    {
      title: "सन् 2019",
      content: (
        <div>
          <p className="text-neutral-800  text-sm md:text-3xl font-normal mb-4">
            भारतीय जनता पार्टी द्वारा जिला उपाध्यक्ष बनाया गया।{" "}
          </p>
        </div>
      ),
    },
    {
      title: "सन् 2019",
      content: (
        <div>
          <p className="text-neutral-800  text-sm md:text-3xl font-normal mb-4">
            भारतीय जनता पार्टी के जिला सदस्यता अभियान के प्रमुख के रूप में कार्य
            किया।{" "}
          </p>
        </div>
      ),
    },
    {
      title: "सन् 2019",
      content: (
        <div>
          <p className="text-neutral-800  text-sm md:text-3xl font-normal mb-4">
            लोक सभा चुनाव में पलिया विधानसभा प्रभारी के रूप में कार्य किया।{" "}
          </p>
        </div>
      ),
    },
    {
      title: "सन् 2020",
      content: (
        <div>
          <p className="text-neutral-800  text-sm md:text-3xl font-normal mb-4">
            पुनः भारतीय जनता पार्टी का जिला उपाध्यक्ष बनाया गया। सन 2022 में
            पार्टी द्वारा कस्ता विधानसभा में पालक के रूप कार्य किया एवं 17000
            वोटों से विजयी प्राप्त हुई।{" "}
          </p>
        </div>
      ),
    },
    {
      title: "सन् 2022",
      content: (
        <div>
          <p className="text-neutral-800  text-sm md:text-3xl font-normal mb-4">
            चुनाव पश्चात् गोला नगर के सभी बूथ अध्यक्षों का घर-घर जाकर सम्मान
            किया{" "}
          </p>
        </div>
      ),
    },
    {
      title: "सन् 2022",
      content: (
        <div>
          <p className="text-neutral-800  text-sm md:text-3xl font-normal mb-4">
            गोला विधानसभा के उपचुनाव में शक्तिकेन्द्र बस्तौली में पालक के रूप
            में कार्य किया एवं गोला नगर में जन सम्पर्क व नुक्कड़ सभायें की और
            अपने बूथ 218 पर कुल मतदान का 83 प्रतिशत मत प्राप्त किया।{" "}
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800  text-sm md:text-3xl font-normal mb-4">
             गोला नगर के सभी वार्डों में चाय-चौपाल कर सरकार की उपलब्धियों की
            जानकारी प्रदान की
          </p>
          <p className="text-neutral-800  text-sm md:text-3xl font-normal mb-4">
            वर्तमान में नगरवासियों द्वारा सौपें गए नगर पालिका परिषद के अध्यक्ष
            पद की जिम्मेदारी का निर्वाह पूरी निष्ठा के साथ कर रहा हूँ।{" "}
          </p>
        </div>
      ),
    },
    
  ];
  return (
    <div className="w-full">
      <Timeline data={data} title={'राजनैतिक परिचय:-'} />
    </div>
  );
}
