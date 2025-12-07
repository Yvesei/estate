import { Property } from "../types/property.types";
import { mockProperties } from "../models/property.model";

export class PropertiesRepository {
  async getAllProperties(): Promise<Property[]> {
    return mockProperties;
  }
  
  async getPropertyById(id: string): Promise<Property | null> {
    return mockProperties.find((p) => p.id === id) || null;
  }

  async createProperty(data: Omit<Property, "id">): Promise<Property> {
    const newProperty: Property = {
      id: Date.now().toString(),
      ...data,
    };
    mockProperties.push(newProperty);
    return newProperty;
  }
}