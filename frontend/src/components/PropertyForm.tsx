import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Property } from "../types/property.types";
import { updateProperty } from "../services/propertyService";
import { useFormHandler } from "../hooks/useFormHandler";

interface Props {
  property: Property;
}

const PropertyForm = ({ property }: Props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(property);
  const { errors, successMessage, handleSubmit, clearFieldError } =
    useFormHandler();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" || name === "surface" ? Number(value) : value,
    });
    clearFieldError(name);
  };

  const onSubmit = async () => {
    await updateProperty(property.id, formData);
  };

  const onSuccess = () => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(onSubmit, onSuccess);
      }}
      className="max-w-md mx-auto p-6"
    >
      {/* Success Message */}
      {successMessage && (
        <div className="mb-4 p-4 bg-green-300 border border-green-400 text-black-700 rounded-lg">
          Property updated successfully!
        </div>
      )}

      {/* General Error */}
      {errors.general && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-black-700 rounded-lg">
          {errors.general}
        </div>
      )}

      {/* Title Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Titre</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.title
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      {/* City Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Ville</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.city
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
        />
        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
      </div>

      {/* Price Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">  Prix (€)</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.price
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
        />
        {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
      </div>

      {/* Surface Field */}
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2">Surface (m²)</label>
        <input
          type="number"
          name="surface"
          value={formData.surface}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.surface
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
        />
        {errors.surface && <p className="text-red-500 text-sm mt-1">{errors.surface}</p>}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          type="submit"
          className="flex-1 inline-flex items-center justify-center text-gray-700 bg-gray-100 box-border border border-gray-300 hover:bg-gray-200 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 font-bold leading-5 rounded-lg text-md px-4 py-2.5 focus:outline-none transition-colors"
        > Save
        </button>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex-1 inline-flex items-center justify-center text-gray-700 bg-gray-100 box-border border border-gray-300 hover:bg-gray-200 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 font-bold leading-5 rounded-lg text-md px-4 py-2.5 focus:outline-none transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default PropertyForm;