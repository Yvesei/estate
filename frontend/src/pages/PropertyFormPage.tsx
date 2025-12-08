import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPropertyById } from "../services/propertyService";
import PropertyForm from "../components/PropertyForm";
import { Property } from "../types/property.types";

const PropertyFormPage = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const isEditMode = !!id;

  useEffect(() => {
    if (!isEditMode) {
      return;
    }

    const fetchProperty = async () => {
      try {
        if (id) {
          const data = await getPropertyById(id);
          setProperty(data);
        }
      } catch (err: any) {
        setError("Failed to load property. Please try again.");
        console.error("Error fetching property:", err);
      }
    };

    fetchProperty();
  }, [id, isEditMode]);

  if (error) {
    return <div className="p-6 text-center text-red-600">{error}</div>;
  }

  if (isEditMode && !property) {
    return <div className="p-6 text-center text-gray-600">Property not found</div>;
  }

  const defaultProperty: Property = property || {
    id: "",
    title: "",
    city: "",
    price: 0,
    surface: 0,
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {isEditMode ? `Modifier: ${property?.title}` : "Créer une nouvelle propriété"}
        </h1>
        <PropertyForm property={defaultProperty} />
      </div>
    </div>
  );
};

export default PropertyFormPage;