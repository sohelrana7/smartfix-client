import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../providers/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const ServiceToDo = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetchAllBookings();
  }, [user]);
  const fetchAllBookings = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/bookings/${user?.email}?provider=true`
    );
    setBookings(data);
  };
  // console.log(bookings);
  const handleStatusChange = async (id, newStatus) => {
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/booking-status-update/${id}`,
        { newStatus }
      );

      if (data.modifiedCount > 0) {
        toast.success("Status updated!");
        // Update local state
        setBookings((prev) =>
          prev.map((b) =>
            b._id === id ? { ...b, service_status: newStatus } : b
          )
        );
      }
    } catch (err) {
      toast.error("Failed to update status");
      console.error(err);
    }
  };

  return (
    <section className="container px-4 mx-auto my-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">Service To Do</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {bookings.length}
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Service Name</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Booking User Email</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <span>Service Taking Date</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Price</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Status
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {bookings.map((booking) => (
                    <tr key={booking._id}>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {booking.service_name}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {booking.user_email}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {/* {format(new Date(bid.deadline), "P")} */}
                        {booking.booking_date}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        ${booking.price}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        <select
                          value={booking.service_status}
                          onChange={(e) =>
                            handleStatusChange(booking._id, e.target.value)
                          }
                          className="border px-2 py-1 rounded"
                        >
                          <option value="pending">Pending</option>
                          <option value="working">Working</option>
                          <option value="completed">Completed</option>
                        </select>
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button
                            // onClick={() =>
                            //   handleStatusChange(
                            //     bid._id,
                            //     bid.status,
                            //     "In Progress"
                            //   )
                            // }
                            // disabled={
                            //   bid.status === "Completed" ||
                            //   bid.status === "In Progress"
                            // }
                            className="disabled:cursor-not-allowed text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 12.75 6 6 9-13.5"
                              />
                            </svg>
                          </button>

                          <button
                            // onClick={() =>
                            //   handleStatusChange(
                            //     bid._id,
                            //     bid.status,
                            //     "Rejected"
                            //   )
                            // }
                            // disabled={
                            //   bid.status === "In Progress" &&
                            //   bid.status === "Completed"
                            // }
                            className="disabled:cursor-not-allowed text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceToDo;
