import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPropertyById } from "../services/propertyService";
import { Property } from "../types/property.types";
import { MapPinHouse, Pencil } from "lucide-react";

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [property, setProperty] = useState<Property | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        if (id) {
          const data = await getPropertyById(id);
          setProperty(data);
        }
      } catch (err: any) {
        setError("Failed to load property details.");
        console.error("Error fetching property:", err);
      } 
    };

    fetchProperty();
  }, [id]);

  const handleEdit = () => {
    navigate(`/property/${id}`);
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-red-600 mb-4">{error}</p>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-gray-600 mb-4">Property not found</p>
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-gray-50">
    <div className="flex flex-col lg:flex-row p-6 max-w-7xl mx-auto pt-12 items-start justify-center">
      
      {/* left side */}
      <div className="flex-1 flex flex-col">
        <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-8xl mb-6 shadow-sm hover:opacity-90 transition-opacity">
          ^^
        </div>
      </div>

      {/* details card */}
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-sm h-96 bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:bg-gray-50 transition-shadow">
          
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
            {property.title}
          </h2>

          {/* price */}
          <div className="mb-6 flex gap-4 text-sm">
            <div>
              <p className="text-gray-500 text-xs font-medium uppercase">Prix</p>
              <p className="text-lg font-bold text-gray-900">
                {property.price.toLocaleString()} €
              </p>
            </div>
          </div>

          {/* surface */}
          <div className="mb-6 flex gap-4 text-sm">
            <div>
              <p className="text-gray-500 text-xs font-medium uppercase">Surface</p>
              <p className="text-lg font-bold text-gray-900">{property.surface} m²</p>
            </div>
          </div>

          {/* city */}
          <p className="flex mb-6 text-gray-600 text-base items-center">
            <MapPinHouse size={24} className="pr-2" />
            {property.city}
          </p>

          <button
            onClick={handleEdit}
            className="w-full inline-flex items-center justify-center text-gray-700 bg-gray-100 border border-gray-300 hover:bg-gray-200 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-colors mt-14"
          >
            <Pencil size={18} className="pr-2" />
            Modifier
          </button>

        </div>
      </div>

    </div>
  </div>

  );
};

export default PropertyDetail;