import axios from "axios";
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

const PopularService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetchAllServices();
  }, []);
  const fetchAllServices = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/services`
    );
    setServices(data);
  };
  return (
    <div className="container mx-auto px-4 mb-10">
      {/* Section Title */}
      <div className="text-center my-10">
        <h2 className="text-3xl font-bold text-gray-800">Popular Services</h2>
        <p className="text-gray-500 mt-2">
          Get professional and affordable services from trusted experts.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>

      {/* Show All Services */}
      <div className="text-center mt-8">
        <Link
          to="/all-services"
          className="btn bg-[#f5580b] border-none text-white "
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default PopularService;
