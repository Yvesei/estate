import React, { useEffect, useState } from "react";
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

  return (
    <div className="p-6 flex flex-col items-center">
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