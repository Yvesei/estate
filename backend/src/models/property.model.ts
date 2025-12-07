import { Property } from "../types/property.types";

// Mock database
const mockProperties: Property[] = [
  { id: "1", title: "Appartement T3", city: "Paris", price: 450000, surface: 85 },
  { id: "2", title: "Studio meublé", city: "Nantes", price: 90000, surface: 9 },
  { id: "3", title: "Maison familiale", city: "Lyon", price: 650000, surface: 120 },
  { id: "4", title: "Loft moderne", city: "Marseille", price: 380000, surface: 75 },
  { id: "5", title: "Appartement T2", city: "Bordeaux", price: 250000, surface: 55 },
  { id: "6", title: "Villa avec jardin", city: "Toulouse", price: 780000, surface: 150 },
  { id: "7", title: "Studio étudiant", city: "Montpellier", price: 70000, surface: 20 },
  { id: "8", title: "Maison de campagne", city: "Rouen", price: 320000, surface: 95 },
  { id: "9", title: "Appartement neuf", city: "Nice", price: 410000, surface: 80 },
  { id: "10", title: "Penthouse vue mer", city: "Cannes", price: 1200000, surface: 200 },
  { id: "11", title: "Appartement T1", city: "Strasbourg", price: 180000, surface: 35 },
  { id: "12", title: "Maison jumelée", city: "Lille", price: 350000, surface: 90 },
  { id: "13", title: "Studio rénové", city: "Dijon", price: 95000, surface: 18 },
  { id: "14", title: "Loft industriel", city: "Nantes", price: 420000, surface: 95 },
  { id: "15", title: "Villa contemporaine", city: "Biarritz", price: 850000, surface: 160 },
  { id: "16", title: "Appartement cosy", city: "Toulon", price: 220000, surface: 50 },
  { id: "17", title: "Maison ancienne", city: "Avignon", price: 310000, surface: 100 },
  { id: "18", title: "Studio lumineux", city: "Clermont-Ferrand", price: 80000, surface: 15 },
  { id: "19", title: "Appartement duplex", city: "Nancy", price: 390000, surface: 85 },
  { id: "20", title: "Penthouse luxe", city: "Saint-Tropez", price: 1500000, surface: 220 },
];

export { mockProperties };