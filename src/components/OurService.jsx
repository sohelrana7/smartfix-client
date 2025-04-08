import React from "react";
import { Bolt } from "lucide-react";

const services = [
  {
    step: "STEP 1",
    title: "Security System",
    icon: "https://i.ibb.co.com/MDJmC7Dm/security.png",
    description:
      "Our experienced electricians can ensure that your security system is operating properly.",
  },
  {
    step: "STEP 2",
    title: "Heating System",
    icon: "https://i.ibb.co.com/TMmSphjx/heating.png",
    description:
      "Electricians can ensure that heating system is functioning properly to keep you warm & comfortable.",
  },
  {
    step: "STEP 3",
    title: "Air Conditioning",
    icon: "https://i.ibb.co.com/qMDFXcyX/air-condition.png",
    description:
      "Electricians can ensure that air conditioning system is functioning properly to keep you cool.",
  },
  {
    step: "STEP 4",
    title: "Electrical Service",
    icon: "https://i.ibb.co.com/G3pcTNx8/electric-service.png",
    description:
      "Our experienced electricians can ensure that your security system is operating properly.",
  },
];

const OurService = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <h4 className="text-orange-500 font-semibold flex items-center justify-center gap-2 uppercase tracking-wide mb-2">
          <Bolt className="w-4 h-4" />
          Our Service
          <Bolt className="w-4 h-4" />
        </h4>
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          We Provide Professional
          <br />
          Electric Services
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="bg-white rounded-full shadow-md w-30 h-30 flex items-center justify-center text-orange-500 text-3xl">
                <img className="w-[80px]" src={service.icon} alt="" />
              </div>
              <button className="btn btn-sm bg-orange-500 text-white rounded-none">
                {service.step}
              </button>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 max-w-xs text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
