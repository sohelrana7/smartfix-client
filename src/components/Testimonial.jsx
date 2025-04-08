import React from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Matthew Donald",
    role: "Shop Owner",
    image: "https://i.ibb.co.com/M5ChJ79k/user.png",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
    topic: "Identify Competitor Growth",
  },
  {
    name: "Michal Smart",
    role: "Shop Owner",
    image: "https://i.ibb.co.com/M5ChJ79k/user.png",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
    topic: "Understand Category Risks",
  },
  {
    name: "William Richard",
    role: "Shop Owner",
    image: "https://i.ibb.co.com/M5ChJ79k/user.png",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
    topic: "Make Store Visits",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-white py-20 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <h4 className="text-orange-500 font-semibold uppercase tracking-wide mb-2 flex justify-center items-center gap-2">
          <ChevronLeft className="w-4 h-4 rotate-45" />
          Testimonial
          <ChevronRight className="w-4 h-4 -rotate-45" />
        </h4>
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          What Our Client Say About Us
        </h2>

        <div className="flex gap-6 overflow-x-auto no-scrollbar px-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-md p-6 w-80 shrink-0 rounded-md flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
              <p className="text-orange-500 font-semibold uppercase text-sm mb-4">
                {item.role}
              </p>
              <p className="text-gray-600 text-sm mb-6">{item.text}</p>

              <div className="bg-white p-4 rounded-md shadow-sm w-full">
                <p className="font-semibold mb-2">{item.topic}</p>
                <div className="flex justify-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
