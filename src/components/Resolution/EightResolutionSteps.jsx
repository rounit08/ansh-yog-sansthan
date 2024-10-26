import { useState, useEffect, useRef } from "react";
import CameraSvg from "../../../public/svg/camera.svg";
import CertificateImage from "../../../public/images/EightResolution/EightResCertificate.png";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { FormControl, FormItem, FormLabel } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const EightResolutionSteps = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    district: "",
    state: "",
    city: "",
    pincode: "",
    photo: null,
    resolutions: [],
  });

  const [uploadedImage, setUploadedImage] = useState(null); // New state for uploaded image
  const canvasRef = useRef(null); // Reference for the canvas
  const [certificateDataUrl, setCertificateDataUrl] = useState(null); // New state for certificate data URL

  const resolutionsList = [
    "मैं अपने शरीर को स्वस्थ एवं निरोग रखूँगा। हर परिस्थिति में सकारात्मक सोच रखूँगा एवं सभी के साथ मेरा आचार (आचरण), विचार (चितन) सात्विक होगा।",
    "घर परिवार व समाज में मातृभाषा में बात करूँगा , यदि कोई दुर्व्यसन है तो उसका त्याग करूँगा । मैं सभी मुख्य त्यौहार/पर्व परिवार के साथ मिलकर मनाऊँगा, उन्हें उचित समय अवश्य दूँगा एवं सनातन संस्कृति, संस्कार व कुल परम्परा को बनाये रखूँगा।",
    "सामाजिक हित के लिए निजी स्वार्थ का त्याग करूँगा , सामाजिक कार्यों में सहयोग की भावना से कार्य करूँगा  एवं समानता का व्यवहार व समाज कल्याण के कार्य करूँगा ।",
    "राष्ट्र के स्वाभिमान, संविधान एवं कानून का पालन करूँगा , स्वदेशी अपनाऊँगा, क्षेत्रीय खरीद को बल दूँगा एवं आत्मनिर्भर भारत में योगदान दूँगा, जनसुविधाओं का दुरूपयोग नहीं करूँगा । मतदान के अधिकार का राष्ट्र हित में प्रयोग करूँगा  एवं राष्ट्र की एकता व अखंडता बनाए रखूँगा।",
    "गौ सेवा अवश्य करूँगा  एवं एक गौशाला से स्वयं को जोडूंगा व अपने साथियों/स्वजनों को भी प्रोत्साहित करूँगा । प्रत्येक जीव के लिए दया का भाव रखूँगा।",
    "पक्षियों को दाना व जल, कुत्ता, गाय, सांड आदि को रोटी व जल अवश्य दूँगा।",
    "पर्यावरण संतुलन के लिए कम से कम चार वृक्ष अवश्य लगाऊँगा व अपने स्वजनों/साथियों को प्रोत्साहित करूँगा । जल का सरक्षण करूँगा , जल व अन्न की बर्बादी नहीं करूँगा  व सिंगल यूज प्लास्टिक का प्रयोग नहीं करूँगा  एवं फल/सब्जी/आवश्यक सामग्री लाने हेतु कपड़े/जूट के थैले का उपयोग करूँगा ।",
    "मैंने उपरोक्त आठों संकल्पों को ध्यानपूर्वक पढ़ा है। उसके उपरांत मैं यह चिन्हित कर रहा हूँ।",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      photo: file,
    }));

    // Create a URL for the uploaded image
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl); // Set the uploaded image URL
    }
  };

  const handleResolutionChange = (resolution, checked) => {
    setFormData((prev) => {
      const resolutions = checked
        ? [...prev.resolutions, resolution] // Add resolution if checked
        : prev.resolutions.filter((r) => r !== resolution); // Remove if unchecked
      return { ...prev, resolutions };
    });
  };

  // Update the URL with the current step as a query parameter
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("step", step); // Set the step in query params
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${queryParams}`
    ); // Update the URL
  }, [step]); // Run this effect whenever the step changes

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("कृपया एक मान्य ईमेल पता प्रविष्ट करें।");
      return;
    }

    // Indian phone number validation
    const phoneRegex = /^[789]\d{9}$/;
    if (!phoneRegex.test(formData.phone) || formData.phone.length !== 10) {
      alert("कृपया एक वैध भारतीय फ़ोन नंबर (10 अंक) दर्ज करें।");
      return;
    }

    // Check if all resolutions are selected
    if (step === 4 && formData.resolutions.length !== resolutionsList.length) {
      alert("प्रमाणपत्र बनाने से पहले कृपया सभी संकल्पों का चयन करें।");
      return;
    }

    // Handle form submission logic here
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(4); // Directly go to step 4
    } else if (step === 4) {
      setStep(5);
    }
  };

  const handleGenerateCertificate = async () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Load the certificate image
    const certImg = new Image();
    certImg.src = CertificateImage;

    // Load the uploaded image
    const userImg = new Image();
    userImg.src = uploadedImage;

    // Wait for both images to load
    await Promise.all([
      new Promise((resolve) => {
        certImg.onload = resolve;
      }),
      new Promise((resolve) => {
        userImg.onload = resolve;
      }),
    ]);

    // Draw the certificate image on the canvas
    ctx.drawImage(certImg, 0, 0, canvas.width, canvas.height);
    const imgWidth = 100;
    const imgHeight = 100;
    ctx.drawImage(
      userImg,
      (canvas.width - imgWidth) / 1.1,
      50,
      imgWidth + 10,
      imgHeight + 10
    );

    // Set font properties for the name
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(formData.name, canvas.width / 2, canvas.height / 4 + 50);

    // Convert canvas to data URL
    const newCertificateDataUrl = canvas.toDataURL("image/png");
    setCertificateDataUrl(newCertificateDataUrl); // Store the certificate data URL

    // Create a link to download the certificate
    // Clean up the link element
  };

  const DownloadCertificate = () => {
    const link = document.createElement("a");
    link.href = certificateDataUrl;
    link.download = "अष्ट संकल्प प्रमाण पत्र"; // Set the file name for download
    document.body.appendChild(link);
    link.click(); // Trigger the download
    document.body.removeChild(link);
  };
  return (
    <div className="min-h-screen">
      <div className="bg-baseColor">
        <Navbar />
      </div>

      <div className="max-w-2xl mx-auto p-6">
        <Card>
          <CardHeader>
            <CardTitle>
              {step === 1 && "व्यक्तिगत जानकारी"}
              {step === 2 && "तस्वीर अपलोड करें"}
              {step === 4 && "आठ संकल्प"}
              {step === 5 && "प्रमाणपत्र"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-4">
                  <FormItem>
                    <FormLabel>
                      नाम: <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </FormControl>
                  </FormItem>

                  <FormItem>
                    <FormLabel>
                      ईमेल:
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </FormControl>
                  </FormItem>

                  <FormItem>
                    <FormLabel>
                      मोबाइल नंबर:
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type=""
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        maxLength={10} // Restrict input to 10 digits
                      />
                    </FormControl>
                  </FormItem>

                  <FormItem>
                    <FormLabel>पता:</FormLabel>
                    <FormControl>
                      <Input
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </FormControl>
                  </FormItem>

                  <div className="grid grid-cols-2 gap-4">
                    <FormItem>
                      <FormLabel>जिला:</FormLabel>
                      <FormControl>
                        <Input
                          name="district"
                          value={formData.district}
                          onChange={handleInputChange}
                          required
                        />
                      </FormControl>
                    </FormItem>

                    <FormItem>
                      <FormLabel>राज्य: </FormLabel>
                      <FormControl>
                        <Input
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                        />
                      </FormControl>
                    </FormItem>

                    <FormItem>
                      <FormLabel> शहर/कस्बा: </FormLabel>
                      <FormControl>
                        <Input
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                      </FormControl>
                    </FormItem>

                    <FormItem>
                      <FormLabel>पिनकोड:</FormLabel>
                      <FormControl>
                        <Input
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          required
                          type="number"
                        />
                      </FormControl>
                    </FormItem>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6">
                    {uploadedImage ? (
                      <img
                        src={uploadedImage}
                        alt="Uploaded"
                        className="w-full h-auto"
                      />
                    ) : (
                      <img
                        src={CameraSvg}
                        alt="Camera"
                        className="w-1/2 h-auto"
                      />
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                      id="file-upload"
                      required
                    />
                    <label
                      htmlFor="file-upload"
                      className="mt-4 cursor-pointer bg-blue-500 text-white py-2 px-4 rounded"
                    >
                      तस्वीर चुनें
                    </label>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4">
                  {resolutionsList.map((resolution, index) => (
                    <div key={index} className="flex  items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.resolutions.includes(resolution)}
                        onChange={(e) =>
                          handleResolutionChange(resolution, e.target.checked)
                        }
                      />
                      <label className="text-sm md:text-lg italic font-mono">
                        {resolution}
                      </label>
                    </div>
                  ))}
                </div>
              )}

              {step === 5 && (
                <div>
                  <canvas
                    ref={canvasRef}
                    width={800}
                    height={600}
                    style={{ display: "none" }}
                  />
                  {certificateDataUrl && ( // Show the certificate preview if available
                    <img
                      src={certificateDataUrl}
                      alt="Certificate Preview"
                      className="w-full h-auto"
                    />
                  )}
                  <div>
                    <p className="text-base md:text-lg ">
                      आत्मीय परिवारजन अष्ट संकल्प लेने हेतु धन्यवाद। <br /> मुझे
                      विश्वास है आप इन्हें अपने जीवन में चरितार्थ करने का प्रयास
                      अवश्य करेंगे। उज्ज्वल व स्वस्थ भविष्य की शुभकामनाओं सहित!
                      <p className="mt-2 text-base md:text-lg">
                      आपका,<br />
                      <ul>
                        
                        <li className="text-baseColor font-semibold"> विजय शुक्ल &apos;रिंकू&apos; एड०
                          </li>
                          <li>प्रथम सेवक/अध्यक्ष, नगर पालिका परिषद</li>
                          <li> गोला गोकर्णनाथ &apos;छोटी काशी&apos;</li>
                          <li >जिला: खीरी, उत्तर
                          प्रदेश-262802</li>
                          </ul>  
                      </p>
                     
                    </p>
                  </div>
                  

                  <button
                    className="w-full p-3 font-mono rounded-lg text-baseColor mx-auto border border-baseColor font-semibold italic mt-3"
                    type="button"
                    onClick={handleGenerateCertificate}
                  >
                    प्रमाणपत्र देखें
                  </button>
                  <button
                    className="w-full p-3 font-mono rounded-lg text-baseColor mx-auto border border-baseColor font-semibold italic mt-3"
                    type="button"
                    onClick={DownloadCertificate}
                  >
                    प्रमाणपत्र डाउनलोड करें
                  </button>
                </div>
              )}

              <div className="mt-6">
                <button
                  type="submit"
                  className={`w-full p-3 rounded-lg text-sm md:text-base font-semibold ${step === 5 ? "hidden" : ""} text-baseColor border border-baseColor`}
                >
                  {step === 1 && "आगे बढ़ें"}
                  {step === 2 && "अपलोड करें और जारी रखें"}
                  {step === 4 && "प्रमाणपत्र उत्पन्न करें"}
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="bg-baseColor">
        <Footer />
      </div>
    </div>
  );
};

export default EightResolutionSteps;
