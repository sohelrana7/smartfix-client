/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../providers/AuthContext";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const ManageService = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editService, setEditService] = useState(null);
  useEffect(() => {
    fetchAllServices();
  }, [user]);
  const fetchAllServices = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/services/${user?.email}`
    );
    setServices(data);
  };
  //   console.log(services);
  // delete functionality
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/service/${id}`
      );
      console.log(data);
      toast.success("Data Deleted Successfully!!!");
      fetchAllServices();
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const deleteWithConfirmation = (id) => {
    toast((t) => (
      <span className="flex gap-3 items-center">
        Are you <b>Sure</b>
        <button
          className="bg-red-400 px-2 py-1 rounded-md text-white"
          onClick={() => {
            toast.dismiss(t.id);
            handleDelete(id);
          }}
        >
          Yes
        </button>
        <button
          className="bg-green-400 px-2 py-1 rounded-md text-white"
          onClick={() => toast.dismiss(t.id)}
        >
          Cancel
        </button>
      </span>
    ));
  };

  const handleUpdateService = async (id) => {
    try {
      // Make a shallow copy and remove _id
      const { _id, ...serviceDataWithoutId } = editService;

      await axios.put(
        `${import.meta.env.VITE_API_URL}/update-service/${id}`,
        serviceDataWithoutId
      );

      toast.success("Data Updated Successfully!!!");
      // Optionally close modal, refresh data
      setShowModal(false);
      fetchAllServices();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <section className="container px-4 mx-auto pt-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">
          My Posted Services
        </h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {services.length} Services
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
                        <span>Title</span>
                      </div>
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
                      Description
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {services.map((service) => (
                    <tr key={service._id}>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {service.service_name}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        ${service.price}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {service.description}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button
                            onClick={() => deleteWithConfirmation(service._id)}
                            className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none"
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
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>

                          <Link
                            // to={`/update/${service._id}`}
                            onClick={() => {
                              setEditService(service);
                              setShowModal(true);
                            }}
                            className="text-gray-500 transition-colors duration-200   hover:text-yellow-500 focus:outline-none"
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
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                              />
                            </svg>
                          </Link>
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
      {/* Modal  */}
      {showModal && editService && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-xl">
            <h2 className="text-xl font-bold mb-4">Edit Service</h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="label font-semibold">Service Name</label>
                <input
                  value={editService.service_name}
                  onChange={(e) =>
                    setEditService({
                      ...editService,
                      service_name: e.target.value,
                    })
                  }
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label font-semibold">Price</label>
                <input
                  type="number"
                  value={editService.price}
                  onChange={(e) =>
                    setEditService({ ...editService, price: e.target.value })
                  }
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label font-semibold">Service Area</label>
                <input
                  type="text"
                  value={editService.service_area}
                  onChange={(e) =>
                    setEditService({
                      ...editService,
                      service_area: e.target.value,
                    })
                  }
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label font-semibold">Service Image</label>
                <input
                  type="URL"
                  value={editService.service_image}
                  onChange={(e) =>
                    setEditService({
                      ...editService,
                      service_image: e.target.value,
                    })
                  }
                  className="input input-bordered w-full"
                />
              </div>

              <div className="md:col-span-2">
                <label className="label font-semibold">Description</label>
                <textarea
                  value={editService.description}
                  onChange={(e) =>
                    setEditService({
                      ...editService,
                      description: e.target.value,
                    })
                  }
                  className="textarea textarea-bordered w-full"
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
                onClick={() => handleUpdateService(editService._id)}
                className="btn btn-primary"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ManageService;
