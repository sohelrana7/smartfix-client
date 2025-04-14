import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AuthContext from "../providers/AuthContext";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ServiceDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [service, setService] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [bookingDate, setBookingDate] = useState("");
  const [instructions, setInstructions] = useState("");

  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetchSingleService();
  }, []);
  const fetchSingleService = async () => {
    const { data } = await axiosSecure.get(`/service/${id}`);
    setService(data);
  };
  // console.log(service);
  const handlePurchase = async (e) => {
    e.preventDefault();
    const bookingData = {
      service_Id: service._id,
      service_name: service.service_name,
      service_image: service.service_image,
      provider_email: service.provider?.provider_email,
      provider_name: service.provider?.provider_name,
      user_email: user.email,
      user_name: user.displayName,
      booking_date: bookingDate,
      description: service.description,
      instructions,
      price: service.price,
      service_status: "pending",
    };

    try {
      await axiosSecure.post(
        `${import.meta.env.VITE_API_URL}/add-booking`,
        bookingData
      );
      toast.success("booking Successfully!!!");
      setShowModal(false);
      setBookingDate("");
      setInstructions("");
    } catch (err) {
      toast.error(err.response?.data?.error || "Something went wrong");
    }
  };
  return (
    <div className="container mx-auto my-10">
      <h1>Details page : {id}</h1>
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure className="w-[500px] h-[300px]">
          <img
            className="w-full h-full object-cover"
            src={service?.service_image}
            alt="Service"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service?.service_name}</h2>
          <p>{service?.description}</p>
          <p>${service?.price}</p>
          <div className="flex items-center gap-6">
            <img
              src={service?.provider?.provider_image}
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <h3>{service?.provider?.provider_name}</h3>
            <p>Location: {service?.service_area}</p>
          </div>
          <div className="card-actions justify-end">
            <Link
              onClick={() => setShowModal(true)}
              className="btn bg-[#f5580b] border-none text-white flex items-center"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-xl">
            <h2 className="text-xl font-bold mb-4">Confirm Booking</h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Service ID */}
              <div>
                <label className="label font-semibold">Service ID</label>
                <input
                  disabled
                  value={service._id}
                  className="input input-bordered w-full"
                />
              </div>

              {/* Service Name */}
              <div>
                <label className="label font-semibold">Service Name</label>
                <input
                  disabled
                  value={service.service_name}
                  className="input input-bordered w-full"
                />
              </div>

              {/* Provider Name */}
              <div>
                <label className="label font-semibold">Provider Name</label>
                <input
                  disabled
                  value={service.provider?.provider_name}
                  className="input input-bordered w-full"
                />
              </div>

              {/* Provider Email */}
              <div>
                <label className="label font-semibold">Provider Email</label>
                <input
                  disabled
                  value={service.provider?.provider_email}
                  className="input input-bordered w-full"
                />
              </div>

              {/* Current User Name */}
              <div>
                <label className="label font-semibold">Your Name</label>
                <input
                  disabled
                  value={user.displayName}
                  className="input input-bordered w-full"
                />
              </div>

              {/* Current User Email */}
              <div>
                <label className="label font-semibold">User Email</label>
                <input
                  disabled
                  value={user.email}
                  className="input input-bordered w-full"
                />
              </div>

              {/* Price */}
              <div>
                <label className="label font-semibold">Price</label>
                <input
                  disabled
                  value={`$${service.price}`}
                  className="input input-bordered w-full"
                />
              </div>

              {/* Date Picker */}
              <div>
                <label className="label font-semibold">
                  Service Taking Date
                </label>
                <input
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="label font-semibold">Description</label>
                <textarea
                  placeholder="Address, area, or customized service plan"
                  value={service.description}
                  className="textarea textarea-bordered w-full"
                  rows={3}
                />
              </div>
              {/* Special Instructions */}
              <div className="md:col-span-2">
                <label className="label font-semibold">
                  Special Instructions
                </label>
                <textarea
                  placeholder="Address, area, or customized service plan"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  className="textarea textarea-bordered w-full"
                  rows={3}
                />
              </div>
            </form>

            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="btn btn-outline"
              >
                Cancel
              </button>
              <button
                onClick={handlePurchase}
                className="btn bg-[#f5580b] border-none text-white flex items-center"
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
