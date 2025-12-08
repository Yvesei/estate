import React from "react";
import { Property } from "../types/property.types";
import { useNavigate } from "react-router-dom";
import { MapPinHouse, Pencil } from "lucide-react";

interface Props {
  property: Property;
  onView: (id: string) => void;
}


const PropertyCard = ({ property, onView }: Props) => {
  const navigate = useNavigate();
  
  const handleEdit = () => {
    navigate(`/property/${property.id}`);
  };


  return (
    <div className="w-full bg-white block max-w-sm p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:bg-gray-50 transition-shadow"
    onClick={() => onView(property.id)}>
      {/* Image */}
        <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-4xl hover:opacity-90 transition-opacity">
            ^^
        </div>

      {/* Title */}
      <button
        onClick={() => onView(property.id)}
        className="w-full text-left mt-6"
      >
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
          {property.title}
        </h5>
      </button>

      {/* Location */}
      <p className="flex mb-2 text-gray-600 text-md">
        <span className="h-[1rem] "> <MapPinHouse className="pr-1"/> </span> {property.city}
      </p>

      {/* Details */}
      <div className="mb-6 flex gap-4 text-sm">
        <div>
          <p className="text-gray-500 text-xs font-medium uppercase">Prix</p>
          <p className="text-lg font-bold text-gray-900">{property.price.toLocaleString()} €</p>
        </div>
        <div>
          <p className="text-gray-500 text-xs font-medium uppercase">Surface</p>
          <p className="text-lg font-bold text-gray-900">{property.surface} m²</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleEdit()
          }}
          className="flex-1 inline-flex items-center justify-center text-gray-700 bg-gray-100 box-border border border-gray-300 hover:bg-gray-200 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none transition-colors"
        >
          <Pencil className="pr-2"/> Modifier
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;