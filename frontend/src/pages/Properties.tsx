import { useEffect, useState } from "react";
import { getProperties } from "../services/propertyService";
import { Property } from "../types/property.types";
import PropertyCard from "../components/PropertyCard";
import { useNavigate } from "react-router-dom";

const Properties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      const data = await getProperties();
      setProperties(data);
    };
    fetchProperties();
  }, []);

  const handleView = (id: string) => {
    navigate(`/property/details/${id}`);
  };

  const createProperty = () => navigate("/property")
  
  return (
    <div className="p-6 flex flex-col items-center">
        <button
          onClick={createProperty}
          className="flex-1 inline-flex items-center justify-center text-gray-700 bg-gray-100 box-border border border-gray-300 hover:bg-gray-200 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none transition-colors"
        >
          Creér une nouvelle propriété
        </button>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
        {properties.map((p) => (
            <PropertyCard
            key={p.id}
            property={p}
            onView={handleView}
            />
        ))}
        </div>
    </div>
  );
};

export default Properties;