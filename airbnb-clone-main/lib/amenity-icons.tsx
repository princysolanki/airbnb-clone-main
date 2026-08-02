import {
  Wind,
  SprayCan,
  Droplets,
  Flame,
  ShowerHead,
  WashingMachine,
  Shirt,
  BedDouble,
  Blinds,
  Shirt as IronIcon,
  Archive,
  Baby,
  Tv,
  Fan,
  Camera,
  BellRing,
  Wifi,
  Laptop,
  ChefHat,
  Refrigerator,
  Snowflake,
  Microwave,
  UtensilsCrossed,
  Soup,
  Coffee,
  Wine,
  Sandwich,
  Blend,
  CookingPot,
  DoorOpen,
  Trees,
  UtensilsCrossed as OutdoorDining,
  Car,
  Waves,
  Bath,
  Dumbbell,
  PawPrint,
  Sparkles,
  CalendarClock,
  KeyRound,
  type LucideIcon,
} from "lucide-react";

export const amenityIcons: Record<string, LucideIcon> = {
  // Bathroom
  Hairdryer: Wind,
  "Cleaning products": SprayCan,
  Shampoo: Droplets,
  "Hot water": Flame,
  "Shower gel": ShowerHead,

  // Bedroom and laundry
  "Washing machine": WashingMachine,
  Hangers: Shirt,
  "Bed linen": BedDouble,
  "Room-darkening blinds": Blinds,
  Iron: IronIcon,
  "Clothes storage": Archive,
  Cot: Baby,

  // Entertainment
  TV: Tv,

  // Heating and cooling
  "Air conditioning": Snowflake,
  "Ceiling fan": Fan,

  // Home safety
  "Exterior security cameras on property": Camera,
  "Carbon monoxide alarm": BellRing,
  "Smoke alarm": BellRing,

  // Internet and office
  Wifi: Wifi,
  "Dedicated workspace": Laptop,

  // Kitchen and dining
  Kitchen: ChefHat,
  Fridge: Refrigerator,
  Freezer: Snowflake,
  Microwave: Microwave,
  "Cooking basics": UtensilsCrossed,
  "Crockery and cutlery": Soup,
  Kettle: Coffee,
  Coffee: Coffee,
  "Wine glasses": Wine,
  Toaster: Sandwich,
  Blender: Blend,
  Cooker: CookingPot,

  // Location features
  "Private entrance": DoorOpen,

  // Outdoor
  "Patio or balcony": Trees,
  "Outdoor dining area": OutdoorDining,

  // Parking and facilities
  "Free parking on premises": Car,
  Pool: Waves,
  "Hot tub": Bath,
  Gym: Dumbbell,

  // Services
  "Pets allowed": PawPrint,
  "Cleaning available during stay": Sparkles,
  "Long-term stays allowed": CalendarClock,
  "Self check-in": KeyRound,
};

// Items shown as unavailable (grayed out + strikethrough), matching the screenshot
export const unavailableAmenities = new Set<string>([
  "Carbon monoxide alarm",
  "Smoke alarm",
]);

export function getAmenityIcon(label: string): LucideIcon {
  return amenityIcons[label] ?? Sparkles;
}