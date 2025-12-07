import { PropertiesRepository } from "../repositories/properties.repository";
import { Property } from "../types/property.types";
import { CreatePropertySchema, UpdatePropertySchema } from "../schemas/property.schema";

export class PropertiesService {
  private repository: PropertiesRepository;

  constructor() {
    this.repository = new PropertiesRepository();
  }

  async getAllProperties(): Promise<Property[]> {
    return this.repository.getAllProperties();
  }

  async getPropertyById(id: string): Promise<Property | null> {
    return this.repository.getPropertyById(id);
  }

  async createProperty(data: CreatePropertySchema): Promise<Property> {
    return this.repository.createProperty(data);
  }

  async updateProperty(
    id: string,
    data: UpdatePropertySchema
  ): Promise<Property | null> {
    return this.repository.updateProperty(id, data);
  }

  async deleteProperty(id: string): Promise<boolean> {
    return await this.repository.deleteProperty(id);
  }
}