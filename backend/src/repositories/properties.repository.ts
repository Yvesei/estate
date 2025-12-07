import { Property } from "../types/property.types";
import { mockProperties } from "../models/property.model";

export class PropertiesRepository {
  async getAllProperties(): Promise<Property[]> {
    return mockProperties;
  }
}