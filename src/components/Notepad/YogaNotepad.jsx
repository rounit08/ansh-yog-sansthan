import certificate1 from "../../../public/images/AnshYogaSansthan/certificates/certificate1.jpg";
import certificate2 from "../../../public/images/AnshYogaSansthan/certificates/certificate2.jpg";
import certificate3 from "../../../public/images/AnshYogaSansthan/certificates/certificate3.jpg";
import MemberCard from "../MemberCard/MemberCard";
import member1 from "../../../public/images/AnshYogaSansthan/members/member1.jpg";
import member2 from "../../../public/images/AnshYogaSansthan/members/member2.jpg";
import member3 from "../../../public/images/AnshYogaSansthan/members/member3.jpg";
import member4 from "../../../public/images/AnshYogaSansthan/members/member4.jpg";
import member5 from "../../../public/images/AnshYogaSansthan/members/member5.jpg";
import member6 from "../../../public/images/AnshYogaSansthan/members/member6.jpg";
import member7 from "../../../public/images/AnshYogaSansthan/members/member7.jpg";

const YogaNotepad = () => {
  return (
    <div className="custom-container bg-white shadow-md rounded-lg p-6 max-w-xl mx-auto my-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
        कार्यकारिणी:
      </h1>

      <div className="flex md:grid grid-cols-4  flex-col lg:flex-row items-center gap-5">
        <MemberCard
          image={member3}
          name={"धर्मेन्द्र कुमार तिवारी 'टीटू'"}
          designation={"(संस्थापक एवं अध्यक्ष)"}
        />{" "}
        <MemberCard
          image={member4}
          name={"शिवा शर्मा"}
          designation={"(सचिव)"}
        />{" "}
        <MemberCard
          image={member1}
          name={"प्रतिभा कश्यप"}
          designation={"सहयोगी"}
        />
        <MemberCard
          image={member2}
          name={"कृष्ण कुमार"}
          designation={"सहयोगी"}
        />{" "}
        <MemberCard image={member5} name={"नसीर खान "} designation={"सहयोगी"} />{" "}
        <MemberCard
          image={member6}
          name={"पीयूष पंकज बाजपेई"}
          designation={"सहयोगी"}
        />{" "}
        <MemberCard
          image={member7}
          name={"ज्योति गुप्ता"}
          designation={"सहयोगी"}
        />
      </div>
    </div>
  );
};

export default YogaNotepad;
