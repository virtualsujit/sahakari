import Link from "next/link";
import React from "react";

const page = () => {
  const loans = [
    { title: "Business Loan", subtitle: "व्यापार/व्यवसाय ऋण" },
    { title: "Housing Loan", subtitle: "आवास/घर निर्माण" },
    { title: "Real Estate Loan", subtitle: "घर/जग्गा खरिद ऋण" },
    { title: "Micro Loan", subtitle: "लघु ऋण/ बिना धितो ऋण" },
    { title: "Commercial Loan", subtitle: "औधाेगिक ऋण" },
    { title: "Education Loan", subtitle: "शैक्षिक ऋण" },
    { title: "Foreign Employment Loan", subtitle: "वैदेशिक रोजगार ऋण" },
    { title: "Agriculture Loan", subtitle: "कृषि ऋण" },
    { title: "Hire Purchase", subtitle: "सवारी साधन खरिद ऋण (हायरपर्चेज)" },
    { title: "Easy Loan", subtitle: "सरल ऋण" },
  ];

  const loadDescription = [
    {
      name: "Business Loan(व्यापार/व्यवसाय ऋण)",
      id: "business-loan",
      description:
        "सदस्यहरुले कानुनले वर्जित गरेका वाहेक जस्तोसुकै व्यापार व्यवसाय गर्नका लागि यस शीर्षक अन्र्तगत ऋण लगानी गरिनेछ । ऋण लिँदा सम्भव भए सम्म व्यापार व्यवसाय गरेको दर्ता प्रमाणपत्र, आयकर दर्ताको प्रमाण पत्र, कर चुक्ता प्रमाण पत्र, आवश्यक धितो र व्यवसायको लागत विवरण स्वयंले भरी पेश गर्नुपर्ने छ । यसरी लगानी गर्दा व्यवसायमा हुने कूल लगानीको २० प्रतिशत रकम सदस्य स्वयंले लगानी गरेको हुनुपर्नेछ ।",
    },
    {
      name: "Housing Loan(आवास/घर निर्माण)",
      id: "housing-loan",
      description:
        "सदस्यहरुले आफनो आवास प्रयोजनको लागि घर निर्माण साथै घर मर्मत तथा पुन संरचनाका लागि आवास शिर्षकमा ऋण प्रदान गरिनेछ । यो शिर्षक अन्र्तगत ऋण उपभोग गर्ने सदस्यहरुले घरको नक्सा, सम्बन्धित निकायबाट भवन निर्माणको सम्बन्धित इजाजत पत्र, अनुमानित लागत, आवश्यक धितो, आयस्रोत तथा अन्य आवश्यक पर्ने कागजातहरु पेश गर्नुपर्नेछ ।",
    },
    {
      name: "Real Estate Loan(घर/जग्गा खरिद ऋण)",
      id: "real-estate-loan",
      description:
        "सदस्यहरुले व्यक्तिगत प्रयोजन वा व्यवसाय प्रयोजनको लागि निर्माण सम्पन्न भएको घर वा खाली जग्गा खरिदको लागि घर जग्गा खरिद ऋण उपलब्ध गराईनेछ । घर जग्गा खरिदको लागि सदस्यले विक्री मुल्यको न्युनतम ४० प्रतिशत रकम स्वयंले लगानी गर्नुपर्नेछ ।",
    },
    {
      name: "Micro Loan(लघु ऋण/ बिना धितो ऋण)",
      id: "micro-loan",
      description:
        "संस्थाले कम आय भएका र उद्यमशील महिला सदस्यहरुलाई लक्षित गरि सहज रुपमा ऋण सेवा प्रवाह गर्नका लागि लघु ऋण प्रदान गर्नेछ । सामान्यतया लघु ऋण दिदा सामुहिक जमानीमा समूह र केन्द्र निर्माण गरि ऋण नीतिमा उल्लेख भए बमोजिमको रकम ऋण लगानी गरिनेछ । लघु ऋण लिने ऋणी सदस्य एवं ऋण रकमको सुरक्षाको लागि आवश्यकता बमोजिम वीमा गरि सुरक्षण अपनाईनेछ ।",
    },
    {
      name: "Commercial Loan(औधाेगिक ऋण)",
      id: "commercial-loan",
      description:
        "सदस्यहरुले सञ्चालन गर्ने व्यावसायिक प्रतिष्ठान, साना तथा मझौला उद्योग र विविध सेवा उद्योगहरु जस्तै पर्यटन सेवा, होटल, स्वास्थ्य सेवा, अस्पताल, क्लिनिक, विद्यालय सञ्चालन आदि उद्योग सञ्चालन गर्नको लागि प्रदान गरिने ऋण औद्योगिक ऋण अन्र्तगत रहनेछन् । यस्तो ऋणमा परियोजनाको न्युनतम २० प्रतिशत सदस्यले लगानी गर्नुपर्नेछ ।",
    },
    {
      name: "Education Loan(शैक्षिक ऋण)",
      id: "education-loan",
      description:
        "शैक्षिक ऋण शीर्षक अन्तर्गत सदस्य स्वयं वा परिवारका सदस्यहरुले स्वदेश तथा बिदेशमा अध्ययन गर्नका लागि दिईने ऋण पर्दछ । सदस्यहरुले यस शिर्षक अन्र्तगत ऋण लिँदा अध्ययन गर्ने विद्यार्थीको लागि आवश्यक पर्ने कागजात र अभिभावकको आयस्रोत तथा अन्य आवश्यक धितोको आधारमा ऋण प्रवाह गरिनेछ ।",
    },
    {
      name: "Foreign Employment Loan(वैदेशिक रोजगार ऋण)",
      id: "foreign-employment-loan",
      description:
        "सामान्यतया बैदेशिक रोजगारको शिलशिलामा जाने सदस्यहरुको सुविधाको लागि उनीहरुको बैदेशिक रोजगारी सम्बन्धी कागजात समावेश गरि यो ऋण प्रवाह गरिनेछ । सदस्यले विदेशमा व्यवसाय गर्न तथा घर जग्गा खरीद गर्न समेत यो शीर्षकबाट ऋण प्रवाह गर्न सकिनेछ ।",
    },
    {
      name: "Agriculture Loan(कृषि ऋण)",
      id: "agriculture-loan",
      description:
        "कृषक सदस्यहरुलाई कृषि खेती तथा पशुपालन व्यवसाय सञ्चालन गर्नका लागि कृषि ऋणको लगानी गरिनेछ । खास गरि बेमौसमी खेती, तरकारी खेती, फलफूल खेती, गाई तथा भैसी पालन, माछापालन, बाख्रापालन, कुखुरा पालन वा अन्य पशुपंक्षी पालन लगायतका शीर्षकमा ऋण लगानी गरिनेछ । राम्रो व्यवसाय सञ्चालन गरेको यस्तो ऋणको हकमा सञ्चालक समितिको निर्णयले व्याजमा विशेष छुट दिन सक्नेछ ।",
    },
    {
      name: "Hire Purchase(सवारी साधन खरिद ऋण (हायरपर्चेज))",
      id: "hire-purchase-loan",
      description:
        "व्यक्तिगत प्रयोजन वा व्यावसायिक प्रयोजनका लागि नयाँ सवारी साधनको हकमा आधिकारिक बिक्रेताबाट दिइएको कोटेशनको आधारमा ५० प्रतिशत सम्म र १० बर्ष नपुगेको पुरानो सवारीको हकमा सवारीको मुल्यांकनबाट आएको मुल्यांकनको ३० प्रतिशत ऋण प्रवाह गर्ने सकिनेछ ।",
    },
    {
      name: "Easy Loan(सरल ऋण)",
      id: "easy-loan",
      description:
        "सदस्यहरुको मागलाई ध्यानमा राखी सरल ऋणको व्यवस्था गरिएको छ । सरल ऋण शीर्षक अन्र्तगत ऋण लिने सदस्यहरुले मासिक रुपमा व्याज भुक्तानी गर्नु पर्नेछ । यस्तो ऋण बढीमा १ वर्षको अवधि भन्दा बढिको दिईने छैन ।",
    },
  ];

  return (
    <div className="max-w-[1400px] flex flex-col lg:flex-row  justify-between gap-4 mx-auto text-black py-4">
      <div className="lg:w-1/4 mx-auto lg:sticky lg:top-20 lg:h-screen  w-full ">
        <div className=" px-4  lg:hidden">
          <h1 className="text-green-700 text-2xl font-bold mb-4">Loans</h1>
          <p className="text-gray-700 mb-6">
            In cooperation with various consumer shops, discount cards are being
            provided to its members to save them from the rising inflation.
          </p>
        </div>
        <div className="bg-gray-100 shadow-md p-6 ">
          {loans.map((service, index) => (
            <Link
              href={`#${service.title.toLowerCase().replace(/ /g, "-")}`}
              key={index}
              className="flex justify-between items-center py-2 border-b border-gray-300"
            >
              <span className="text-gray-500 font-medium">
                {service.title} ({service.subtitle})
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="lg:w-3/4 px-4 w-full  text-black">
        <div className=" hidden lg:block">
          <h1 className="text-green-700 text-2xl font-bold mb-4">Loans</h1>
          <p className="text-gray-700 mb-6">
            In cooperation with various consumer shops, discount cards are being
            provided to its members to save them from the rising inflation.
          </p>
        </div>

        <div className="  px-4 w-full  text-black">
          {loadDescription.map((product, index) => (
            <div key={product.id} className="mb-8" id={product.id}>
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
