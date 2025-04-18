import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

const AllServices = () => {
  const axiosSecure = useAxiosSecure();
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAllServices = async () => {
      const { data } = await axiosSecure.get(`/all-services?search=${search}`);
      setServices(data);
    };
    fetchAllServices();
  }, [search]);

  return (
    <div className="container mx-auto my-10">
      <Helmet>
        <title>All Services</title>
      </Helmet>
      <h1 className="my-4 text-2xl">All Services here</h1>
      <div className=" flex items-center justify-center my-10">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="container max-w-md mx-auto"
        >
          <div className="join">
            <input
              type="text"
              className="input join-item"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
            />
            <button className="btn join-item rounded-r-full">Search</button>
          </div>
        </form>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
