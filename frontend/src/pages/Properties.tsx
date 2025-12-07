import React, { useEffect, useState } from "react";
import { getProperties } from "../services/propertyService";
import { Property } from "../types/property.types";
import PropertyCard from "../components/PropertyCard";

const Properties = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const data = await getProperties();
      setProperties(data);
    };
    fetchProperties();
  }, []);

  const handleView = (id: string) => {
    console.log("View", id);
  };

  const handleEdit = (id: string) => {
    console.log("Edit", id);
  };

  return (
    <div className="p-6">
      <div className="flex flex-wrap gap-6 mt-6">
        {properties.map((p) => (
          <PropertyCard
            key={p.id}
            property={p}
            onView={handleView}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default Properties;