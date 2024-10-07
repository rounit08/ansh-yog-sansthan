import { Timeline } from "../ui/timeline";

export function TimelineMovement() {
  const data = [
    {
      title: "सन् 1998",
      content: (
        <div>
          <p className="text-neutral-800  text-sm md:text-3xl font-normal mb-8">
          छात्र की हत्या के विरोध में जन आन्दोलन किया जो गोला नगर का अब तक का सबसे बड़ा छात्र आन्दोलन रहा है। पुलिस द्वारा मुझे अभियुक्त बनाकर 12 धाराएँ लगा कर कई दिनों तक जेल में रखा।

          </p>
        </div>
      ),
    },
    {
      title: "",
      content: (
        <div>
          <p className="text-neutral-800  text-sm md:text-3xl font-normal mb-8">
          पार्टी द्वारा जिले के लोकनपुरवा आन्दोलन में कई छात्रों के साथ गिरफ्तारी दी और नी दिनों तक जेल में बन्द रहा।          </p>
        </div>
      ),
    },
    {
      title: "",
      content: (
        <div>
          <p className="text-neutral-800  text-sm md:text-3xl font-normal mb-4">
           पार्टी द्वारा समय समय पर तय आन्दोलन में सफलता पूर्वक सम्पन्न कराया जैसे रोमेश भण्डारी राज्यपाल का विरोध किया तथा लाठी चार्ज में घायल हुआ।

          </p>
        </div>
      ),
    },

    {
      title: "",
      content: (
        <div>
          <p className="text-neutral-800  text-sm md:text-3xl font-normal mb-4">
          मऊ दंगे के खिलाफ युवा मोर्चा द्वारा लखनऊ में प्रदर्शन में लखीमपुर जिले के जिलाध्यक्ष के रूप में प्रभावी भागीदारी तथा लाठीचार्ज में घायल हुआ।
          </p>
        </div>
      ),
    },
 
    
  ];
  return (
    <div className="w-full">
      <Timeline data={data} title={'आन्दोलनात्मक परिचय :-'} />
    </div>
  );
}
