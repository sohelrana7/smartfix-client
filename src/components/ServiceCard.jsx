import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, service_image, service_name, provider, price, description } =
    service;
  // console.log(service);
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm">
      <figure className="lg:w-[500px] lg:h-[300px]">
        <img
          className="w-full h-full object-cover"
          src={service_image}
          alt="Service"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service_name}</h2>
        <p>{description}</p>
        <p>${price}</p>
        <div className="flex items-center gap-2">
          <img
            src={provider.provider_image}
            alt={provider.provider_name}
            className="w-10 h-10 rounded-full"
          />
          <h3>{provider.provider_name}</h3>
        </div>
        <div className="card-actions justify-end">
          <Link
            to={`/service/${_id}`}
            className="btn bg-[#f5580b] border-none text-white flex items-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
