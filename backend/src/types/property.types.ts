export interface Property {
  id: string;
  title: string;
  city: string;
  price: number;
  surface: number;
  description?: string;
}

export interface PropertyListDto {
  id: string;
  title: string;
  city: string;
  price: number;
  surface: number;
}

export interface PropertyDetailDto {
  id: string;
  title: string;
  city: string;
  price: number;
  surface: number;
  description: string;
}