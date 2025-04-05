import axios from "axios";
import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";

const AllServices = () => {
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
    <div className="container mx-auto my-10">
      <h1 className="my-4 text-2xl">All Services here</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
