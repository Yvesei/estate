import { Property } from "../types/property.types";

// Mock database
const mockProperties: Property[] = [
  { id: "1", title: "Appartement T3", city: "Paris", price: 450000, surface: 85, description: "Bel appartement lumineux situé près des commerces et transports." },
  { id: "2", title: "Studio meublé", city: "Nantes", price: 90000, surface: 9, description: "Petit studio fonctionnel idéal pour étudiant, entièrement meublé." },
  { id: "3", title: "Maison familiale", city: "Lyon", price: 650000, surface: 120, description: "Grande maison avec jardin, parfaite pour une famille nombreuse." },
  { id: "4", title: "Loft moderne", city: "Marseille", price: 380000, surface: 75, description: "Loft spacieux au style contemporain dans un quartier dynamique." },
  { id: "5", title: "Appartement T2", city: "Bordeaux", price: 250000, surface: 55, description: "Charmant T2 situé dans un immeuble récent, proche du centre-ville." },
  { id: "6", title: "Villa avec jardin", city: "Toulouse", price: 780000, surface: 150, description: "Villa élégante avec grand jardin et terrasse ombragée." },
  { id: "7", title: "Studio étudiant", city: "Montpellier", price: 70000, surface: 20, description: "Studio abordable, idéalement situé près de l’université." },
  { id: "8", title: "Maison de campagne", city: "Rouen", price: 320000, surface: 95, description: "Maison paisible en pleine nature, parfaite pour se ressourcer." },
  { id: "9", title: "Appartement neuf", city: "Nice", price: 410000, surface: 80, description: "Appartement moderne dans une résidence récente avec ascenseur." },
  { id: "10", title: "Penthouse vue mer", city: "Cannes", price: 1200000, surface: 200, description: "Superbe penthouse offrant une vue panoramique sur la mer." },
  { id: "11", title: "Appartement T1", city: "Strasbourg", price: 180000, surface: 35, description: "T1 confortable à proximité des transports et des commerces." },
  { id: "12", title: "Maison jumelée", city: "Lille", price: 350000, surface: 90, description: "Maison jumelée rénovée avec petite cour et garage." },
  { id: "13", title: "Studio rénové", city: "Dijon", price: 95000, surface: 18, description: "Studio fraîchement rénové, idéal pour un premier achat." },
  { id: "14", title: "Loft industriel", city: "Nantes", price: 420000, surface: 95, description: "Loft au style industriel avec grandes baies vitrées." },
  { id: "15", title: "Villa contemporaine", city: "Biarritz", price: 850000, surface: 160, description: "Villa moderne avec piscine et finitions haut de gamme." },
  { id: "16", title: "Appartement cosy", city: "Toulon", price: 220000, surface: 50, description: "Appartement chaleureux situé dans un quartier calme." },
  { id: "17", title: "Maison ancienne", city: "Avignon", price: 310000, surface: 100, description: "Maison ancienne avec beaucoup de charme et poutres apparentes." },
  { id: "18", title: "Studio lumineux", city: "Clermont-Ferrand", price: 80000, surface: 15, description: "Studio très lumineux, parfait pour un étudiant ou investisseur." },
  { id: "19", title: "Appartement duplex", city: "Nancy", price: 390000, surface: 85, description: "Duplex élégant avec pièces spacieuses et vue dégagée." },
  { id: "20", title: "Penthouse luxe", city: "Saint-Tropez", price: 1500000, surface: 220, description: "Penthouse prestigieux avec terrasse panoramique et finitions premium." }
];

export { mockProperties };