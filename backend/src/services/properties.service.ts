import { PropertiesRepository } from "../repositories/properties.repository";
import { Property } from "../types/property.types";

export class PropertiesService {
  private repository: PropertiesRepository;

  constructor() {
    this.repository = new PropertiesRepository();
  }

  async getAllProperties(): Promise<Property[]> {
    return this.repository.getAllProperties();
  }
}