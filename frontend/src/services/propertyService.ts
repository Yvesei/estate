import apiClient from "../services/apiClient";
import { Property } from "../types/property.types";

interface ApiListResponse {
  success: boolean;
  data: Property[];
}

interface ApiSingleResponse {
  success: boolean;
  data: Property;
}

export const getProperties = async (): Promise<Property[]> => {
  const response = await apiClient.get<ApiListResponse>("/properties");
  return response.data.data;
};

export const getPropertyById = async (id: string): Promise<Property> => {
  const response = await apiClient.get<ApiSingleResponse>(`/properties/${id}`);
  return response.data.data;
};

export const updateProperty = async (id: string, property: Property): Promise<Property> => {
  const response = await apiClient.put<ApiSingleResponse>(`/properties/${id}`, property);
  return response.data.data;
};

export const createProperty = async (property: Omit<Property, "id">): Promise<Property> => {
  const response = await apiClient.post<ApiSingleResponse>("/properties", property);
  return response.data.data;
};

export const deleteProperty = async (id: string): Promise<boolean> => {
  const response = await apiClient.delete<ApiSingleResponse>(`/properties/${id}`);
  return response.data.success;
};