// Property data for the entire site
export interface Property {
  id: number;
  title: string;
  price: number;
  priceLabel: string;
  beds: number;
  baths: number;
  sqft: number;
  area: string;
  type: "buy" | "rent";
  propertyType: "house" | "condo" | "villa" | "duplex";
  tag?: string;
  image: string;
  features: string[];
  description: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern Family Home",
    price: 685000,
    priceLabel: "$685,000",
    beds: 4,
    baths: 3,
    sqft: 2400,
    area: "South Austin",
    type: "buy",
    propertyType: "house",
    tag: "Featured",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&auto=format&fit=crop&q=80",
    features: ["Modern Kitchen", "2-Car Garage", "Backyard"],
    description:
      "Stunning modern family home in South Austin with open floor plan and premium finishes throughout.",
  },
  {
    id: 2,
    title: "Downtown Condo",
    price: 425000,
    priceLabel: "$425,000",
    beds: 2,
    baths: 2,
    sqft: 1100,
    area: "Central Austin",
    type: "buy",
    propertyType: "condo",
    tag: "City View",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80",
    features: ["City Views", "Rooftop Access", "Concierge"],
    description:
      "Sophisticated urban condo with breathtaking city views in the heart of Central Austin.",
  },
  {
    id: 3,
    title: "Luxury Villa",
    price: 1180000,
    priceLabel: "$1,180,000",
    beds: 5,
    baths: 4,
    sqft: 4200,
    area: "Westlake Hills",
    type: "buy",
    propertyType: "villa",
    tag: "Luxury",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&auto=format&fit=crop&q=80",
    features: ["Pool", "Smart Home", "Theater Room"],
    description:
      "Magnificent luxury villa in prestigious Westlake Hills featuring smart home technology and resort-style pool.",
  },
  {
    id: 4,
    title: "Investment Duplex",
    price: 735000,
    priceLabel: "$735,000",
    beds: 6,
    baths: 4,
    sqft: 3200,
    area: "North Austin",
    type: "buy",
    propertyType: "duplex",
    tag: "Investment",
    image:
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&auto=format&fit=crop&q=80",
    features: ["Rental Income", "2 Units", "Updated"],
    description:
      "Exceptional investment opportunity with strong rental income potential in growing North Austin.",
  },
  {
    id: 5,
    title: "Cozy Starter Home",
    price: 349000,
    priceLabel: "$349,000",
    beds: 3,
    baths: 2,
    sqft: 1450,
    area: "Round Rock",
    type: "buy",
    propertyType: "house",
    tag: "First-Time Buyer",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop&q=80",
    features: ["New Roof", "Updated Kitchen", "Patio"],
    description:
      "Perfect starter home for first-time buyers in family-friendly Round Rock with great schools.",
  },
];
