import apiClient from "../services/apiClient";
import { Property } from "../types/property.types";

interface ApiResponse {
  success: boolean;
  data: Property[];
}

export const getProperties = async (): Promise<Property[]> => {
  const response = await apiClient.get<ApiResponse>("/properties");
  return response.data.data;
};