import { Property, PropertyListDto, PropertyDetailDto } from "../types/property.types";

export class PropertyDto {
  static toListDto(property: Property): PropertyListDto {
    return {
      id: property.id,
      title: property.title,
      city: property.city,
      price: property.price,
      surface: property.surface,
    };
  }

  static toDetailDto(property: Property): PropertyDetailDto {
    return {
      id: property.id,
      title: property.title,
      city: property.city,
      price: property.price,
      surface: property.surface,
      description: property.description || "",
    };
  }
}