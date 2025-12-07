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

  async updateProperty(
    id: string,
    data: Partial<Omit<Property, "id">>
  ): Promise<Property | null> {
    const index = mockProperties.findIndex((p) => p.id === id);
    if (index === -1) return null;

    mockProperties[index] = { ...mockProperties[index], ...data };
    return mockProperties[index];
  }
}