import { PropertiesRepository } from "../repositories/properties.repository";
import { PropertyListDto, PropertyDetailDto } from "../types/property.types";
import { CreatePropertySchema, UpdatePropertySchema } from "../schemas/property.schema";
import { PropertyDto } from "../dtos/property.dto";

export class PropertiesService {
  private repository: PropertiesRepository;

  constructor() {
    this.repository = new PropertiesRepository();
  }

  async getAllProperties(): Promise<PropertyListDto[]> {
    const properties = await this.repository.getAllProperties();
    return properties.map((p) => PropertyDto.toListDto(p));
  }

  async getPropertyById(id: string): Promise<PropertyDetailDto | null> {
    const property = await this.repository.getPropertyById(id);
    return property ? PropertyDto.toDetailDto(property) : null;
  }

  async createProperty(data: CreatePropertySchema): Promise<PropertyDetailDto> {
    const property = await this.repository.createProperty(data);
    return PropertyDto.toDetailDto(property);
  }

  async updateProperty(
    id: string,
    data: UpdatePropertySchema
  ): Promise<PropertyDetailDto | null> {
    const property = await this.repository.updateProperty(id, data);
    return property ? PropertyDto.toDetailDto(property) : null;
  }

  async deleteProperty(id: string): Promise<boolean> {
    return this.repository.deleteProperty(id);
  }
}
