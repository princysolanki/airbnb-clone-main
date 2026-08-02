// Content values sourced from a saved copy of the reference listing page.
// Structure, components, and styling are original implementations.

import {
  ChefHat,
  Wifi,
  Laptop,
  Car,
  Waves,
  Bath,
  PawPrint,
  Camera,
  BellRing,
  type LucideIcon,
} from "lucide-react";

export const listing = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  subtitle: "Entire serviced apartment in Candolim, India",
  stats: "3 guests · 1 bedroom · 1 bed · 1 bathroom",
  rating: 4.95,
  reviewCount: 19,
  guestFavourite: true,
  host: {
    name: "Mirashya Homes",
    yearsHosting: 2,
    avatar: "/images/host.jpeg",
    reviewsTotal: 1463,
    ratingAvg: 4.68,
  },
};

export const heroImages = [
  { src: "/images/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg", alt: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 1" },
  { src: "/images/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg", alt: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 2" },
  { src: "/images/9be71047-fc52-438a-9270-75cb470f6752.jpeg", alt: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 3" },
  { src: "/images/67c61c6f-6260-4809-9510-0360e58a345d.jpeg", alt: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 4" },
  { src: "/images/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg", alt: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 5" },
];

export const highlights = [
  {
    icon: "bonfire",
    title: "Outdoor entertainment",
    body: "The pool and alfresco dining are great for summer trips.",
  },
  {
    icon: "fan",
    title: "Designed for staying cool",
    body: "Beat the heat with the A/C and ceiling fan.",
  },
  {
    icon: "door",
    title: "Self check-in",
    body: "You can check in with the building staff.",
  },
];

export const description = {
  translated: true,
  text: "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it's ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴",
};

export const sleepSpaces = [
  { name: "Bedroom", detail: "1 double bed", image: "/images/67c61c6f-6260-4809-9510-0360e58a345d.jpeg" },
  { name: "Living room", detail: "1 sofa", image: "/images/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg" },
];

export interface Amenity {
  label: string;
  icon: LucideIcon;
  available: boolean;
}

export const amenitiesPreview: Amenity[] = [
  { label: "Kitchen", icon: ChefHat, available: true },
  { label: "Wifi", icon: Wifi, available: true },
  { label: "Dedicated workspace", icon: Laptop, available: true },
  { label: "Free parking on premises", icon: Car, available: true },
  { label: "Pool", icon: Waves, available: true },
  { label: "Hot tub", icon: Bath, available: true },
  { label: "Pets allowed", icon: PawPrint, available: true },
  { label: "Exterior security cameras on property", icon: Camera, available: true },
  { label: "Carbon monoxide alarm", icon: BellRing, available: false },
  { label: "Smoke alarm", icon: BellRing, available: false },
];

export const amenitiesTotal = 50;

export const amenityCategories: { category: string; items: string[] }[] = [
  { category: "Bathroom", items: ["Hairdryer", "Cleaning products", "Shampoo", "Hot water", "Shower gel"] },
  { category: "Bedroom and laundry", items: ["Washing machine", "Hangers", "Bed linen", "Room-darkening blinds", "Iron", "Clothes storage", "Cot"] },
  { category: "Entertainment", items: ["TV"] },
  { category: "Family", items: ["Cot"] },
  { category: "Heating and cooling", items: ["Air conditioning", "Ceiling fan"] },
  { category: "Home safety", items: ["Exterior security cameras on property", "Carbon monoxide alarm", "Smoke alarm"] },
  { category: "Internet and office", items: ["Wifi", "Dedicated workspace"] },
  { category: "Kitchen and dining", items: ["Kitchen", "Fridge", "Freezer", "Microwave", "Cooking basics", "Crockery and cutlery", "Kettle", "Coffee", "Wine glasses", "Toaster", "Blender", "Cooker"] },
  { category: "Location features", items: ["Private entrance"] },
  { category: "Outdoor", items: ["Patio or balcony", "Outdoor dining area"] },
  { category: "Parking and facilities", items: ["Free parking on premises", "Pool", "Hot tub", "Gym"] },
  { category: "Services", items: ["Pets allowed", "Cleaning available during stay", "Long-term stays allowed", "Self check-in"] },
];

export const calendar = {
  nightsLabel: "5 nights in Candolim",
  dateRangeLabel: "18 Oct 2026 - 23 Oct 2026",
  months: [
    { name: "October 2026", year: 2026, month: 9, days: 31, startWeekday: 4 }, // Thu
    { name: "November 2026", year: 2026, month: 10, days: 30, startWeekday: 0 }, // Sun
  ],
  checkIn: { month: 9, day: 18 },
  checkOut: { month: 9, day: 23 },
};

export const booking = {
  price: 28499,
  currency: "₹",
  nights: 5,
  checkIn: "10/18/2026",
  checkOut: "10/23/2026",
  guests: 2,
  freeCancellationBefore: "17 October",
  discountText: "Get 10% off your next stay.",
};

export const guestFavourite = {
  title: "Guest favourite",
  body: "One of the most loved homes on Airbnb, according to guests",
  reviewsBody: "This home is a guest favourite based on ratings, reviews and reliability",
  rating: 4.95,
};

export const ratingCategories = [
  { key: "cleanliness", label: "Cleanliness", value: 5.0, icon: "cleanliness" },
  { key: "accuracy", label: "Accuracy", value: 5.0, icon: "accuracy" },
  { key: "checkin", label: "Check-in", value: 5.0, icon: "checkin" },
  { key: "communication", label: "Communication", value: 5.0, icon: "communication" },
  { key: "location", label: "Location", value: 4.8, icon: "location" },
  { key: "value", label: "Value", value: 4.8, icon: "value" },
];

export const reviewHighlights = [
  { key: "comfort", label: "Comfort", count: 6, icon: "comfort" },
  { key: "accuracy", label: "Accuracy", count: 5, icon: "accuracy" },
  { key: "hottub", label: "Hot tub", count: 5, icon: "hottub" },
  { key: "condition", label: "Condition", count: 4, icon: "condition" },
  { key: "hospitality", label: "Hospitality", count: 8, icon: "hospitality" },
  { key: "cleanliness", label: "Cleanliness", count: 4, icon: "cleanliness" },
  { key: "amenities", label: "Amenities", count: 2, icon: "amenities" },
];

export const ratingDistribution = [
  { stars: 5, count: 17 },
  { stars: 4, count: 2 },
  { stars: 3, count: 0 },
  { stars: 2, count: 0 },
  { stars: 1, count: 0 },
];

export const reviews = [
  { name: "Amit", avatarInitial: "A", meta: "2 months on Airbnb", rating: 5, time: "1 week ago", text: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property." },
  { name: "Aheesh", avatar: "/images/rev1.jpeg", meta: "3 years on Airbnb", rating: 5, time: "2 weeks ago", text: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.", truncated: true },
  { name: "Samiksha", avatar: "/images/rev2.jpeg", meta: "8 months on Airbnb", rating: 5, time: "May 2026", text: "the host nitish was really great help" },
  { name: "Vedant", avatarInitial: "V", meta: "4 years on Airbnb", rating: 5, time: "May 2026", text: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine. The highlight of our stay was definitely the jacuzzi. It was clean, well-kept, and the perfect place to relax after a day of exploring Goa. It added a luxurious touch to our vacation and made our experience even more memorable. The property was exactly as described, well-equipped, and offered a peaceful atmosphere. We would highly recommend this place to anyone looking for a comfortable, clean, and relaxing stay in Goa. Looking forward to visiting again!", truncated: true },
  { name: "Vaibhav S", avatar: "/images/rev3.jpeg", meta: "3 years on Airbnb", rating: 5, time: "May 2026", text: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too." },
  { name: "Mohd", avatar: "/images/rev4.jpeg", meta: "5 years on Airbnb", rating: 5, time: "May 2026", text: "Great place. Exactly as described in the listing." },
];

export const location = {
  place: "Candolim, Goa, India",
  note: "Exact location will be provided after booking.",
  neighbourhoodTitle: "Neighbourhood highlights",
  neighbourhoodBody: "Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.",
};

export const hostDetail = {
  name: "Mirashya Homes",
  reviews: 1463,
  rating: 4.68,
  yearsHosting: 2,
  avatar: "/images/host.jpeg",
  verified: true,
  bornDecade: "Born in the 80s",
  school: "NICMAR GOA",
  responseRate: 100,
  responseTime: "Responds within an hour",
  coHosts: [
    { name: "Sharath", avatar: "/images/co1.jpg" },
    { name: "Simran", avatar: "/images/rev2.jpeg" },
    { name: "Shruti", initial: "S" },
    { name: "Aman Dev Pahwa", avatar: "/images/co2.jpg" },
    { name: "Pallavi", avatar: "/images/rev1.jpeg" },
    { name: "Amisha", initial: "A" },
    { name: "Maria Karen Priyanka", avatar: "/images/co3.jpg" },
    { name: "Sanyukta", avatar: "/images/rev4.jpeg" },
  ],
};

export const thingsToKnow = {
  cancellation: {
    title: "Cancellation policy",
    body: "Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.",
    footnote: "Review this host's full policy for details.",
  },
  houseRules: {
    title: "House rules",
    rules: ["Check-in after 2:00 pm", "Checkout before 11:00 am", "3 guests maximum"],
  },
  safety: {
    title: "Safety & property",
    items: ["Carbon monoxide alarm not reported", "Smoke alarm not reported", "Exterior security cameras on property"],
  },
};

export const nearbyStays = [
  { title: "Beautiful Studio with a view to die for", price: 23600, rating: 4.91, image: "/images/s1.jpeg" },
  { title: "NAQAB - 1bhk with private pool", price: 42218, rating: 4.95, image: "/images/s2.jpeg" },
  { title: "Greentique Luxury Flat with plunge pool, Calangute", price: 44506, rating: 4.94, image: "/images/s3.jpeg" },
  { title: "The Tropical Studio | 5 mins to Beach", price: 22824, rating: 4.96, image: "/images/s4.jpeg" },
  { title: "Luxury Casa Bella 1BHK with plunge pool, Calangute", price: 39942, rating: 4.95, image: "/images/s5.jpeg" },
  { title: "Kanso by Earthen Window | Jacuzzi | Terrace | Pool", price: 45648, rating: 5.0, image: "/images/s6.jpeg" },
  { title: "Luxury Apt | Private Pool | 6 Mins from Beach", price: 48786, rating: 4.93, image: "/images/s1.jpeg" },
  { title: "Serendipity Cottage - Calm Stay in Calangute-Baga.", price: 22824, rating: 4.92, image: "/images/s2.jpeg" },
];

export type TourPhoto = { src: string; alt: string };
export type TourCategory = { name: string; caption?: string; photos: TourPhoto[] };

export const photoTour: TourCategory[] = [
  {
    name: "Living room 1",
    caption: "Sofa · Air conditioning · Ceiling fan · TV",
    photos: [
      { src: "/images/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg", alt: "Living room 1" },
      { src: "/images/a45feaa2-b607-4092-83ac-5fd4b2894959.jpeg", alt: "Living room 1" },
      { src: "/images/f1da1c3d-0d10-481e-9b63-c71f9073f30b.jpeg", alt: "Living room 1" },
    ],
  },
  {
    name: "Living room 2",
    caption: "Ceiling fan · Hot tub",
    photos: [
      { src: "/images/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg", alt: "Living room 2" },
      { src: "/images/9be71047-fc52-438a-9270-75cb470f6752.jpeg", alt: "Living room 2" },
      { src: "/images/f6de1663-4e9c-4414-b63b-29a154a92ee1.jpeg", alt: "Living room 2" },
      { src: "/images/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg", alt: "Living room 2" },
      { src: "/images/34529829-a971-44d3-ac2f-90ea3678a34d.jpeg", alt: "Living room 2" },
      { src: "/images/153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg", alt: "Living room 2" },
      { src: "/images/3c6e6809-1bb1-47a6-8e24-aff593e1c28f.jpeg", alt: "Living room 2" },
    ],
  },
  {
    name: "Full kitchen",
    caption: "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery",
    photos: [
      { src: "/images/56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg", alt: "Full kitchen" },
      { src: "/images/ddc853d7-e658-405c-bedc-8f31106c447e.jpeg", alt: "Full kitchen" },
    ],
  },
  {
    name: "Bedroom",
    caption: "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi",
    photos: [
      { src: "/images/67c61c6f-6260-4809-9510-0360e58a345d.jpeg", alt: "Bedroom" },
      { src: "/images/1c827136-4a85-4fe0-8e69-3fd8ea19bb17.jpeg", alt: "Bedroom" },
      { src: "/images/0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg", alt: "Bedroom" },
      { src: "/images/a74e3c0b-3188-4442-9146-1cd4d6ea45df.jpeg", alt: "Bedroom" },
      { src: "/images/48a8ffbc-fbf7-4f84-bc29-ee400da3f08b.jpeg", alt: "Bedroom" },
      { src: "/images/3cf31697-f3f3-4c60-82c4-029acb119ae4.jpeg", alt: "Bedroom" },
    ],
  },
  {
    name: "Full bathroom",
    caption: "Hairdryer · Hot water · Shampoo · Shower gel",
    photos: [{ src: "/images/97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg", alt: "Full bathroom" }],
  },
  {
    name: "Gym",
    caption: "Air conditioning · Gym · Exercise equipment · Ceiling fan",
    photos: [
      { src: "/images/9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg", alt: "Gym" },
      { src: "/images/246bd88d-4dd6-4117-a401-02a36ebfcf16.jpeg", alt: "Gym" },
      { src: "/images/4fede77d-7a71-446f-89e3-263af937f3fa.jpeg", alt: "Gym" },
      { src: "/images/79f59adb-5a5f-4d6c-8109-1f01f4ca0d03.jpeg", alt: "Gym" },
      { src: "/images/f19d8c0a-1d88-42a4-9218-686d4f0db7e4.jpeg", alt: "Gym" },
    ],
  },
  {
    name: "Exterior",
    photos: [
      { src: "/images/23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg", alt: "Exterior" },
      { src: "/images/5adfdf3e-d497-4efc-ab8c-fc559dab311e.jpeg", alt: "Exterior" },
      { src: "/images/608748cd-6ee7-4a71-88a2-ba79d3ddba5a.jpeg", alt: "Exterior" },
      { src: "/images/5b856fde-a393-41bf-b373-c9d02e64221f.jpeg", alt: "Exterior" },
      { src: "/images/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg", alt: "Exterior" },
      { src: "/images/42befad7-fb29-473d-91db-b03e7a544d1d.jpeg", alt: "Exterior" },
    ],
  },
  {
    name: "Pool",
    caption: "Pool",
    photos: [
      { src: "/images/fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg", alt: "Pool" },
      { src: "/images/929545d3-e241-46c0-8a70-c24531ce7b54.jpeg", alt: "Pool" },
      { src: "/images/8eb65a8b-e795-4870-b141-6f63b1be24ae.jpeg", alt: "Pool" },
    ],
  },
  {
    name: "Additional photos",
    photos: [
      { src: "/images/70325367-cbae-4993-b560-18cd3f6edd53.jpeg", alt: "Additional photos" },
      { src: "/images/cc7a56bd-242c-498a-9aef-0cffac619e54.jpeg", alt: "Additional photos" },
      { src: "/images/30ad93b2-293f-494d-b645-626303c6cb93.jpeg", alt: "Additional photos" },
      { src: "/images/9642a60d-e9de-4e1a-89c2-9ebd230f4a74.jpeg", alt: "Additional photos" },
      { src: "/images/b6599f26-d65c-4df0-baf2-ef18c82a86a3.jpeg", alt: "Additional photos" },
      { src: "/images/dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg", alt: "Additional photos" },
      { src: "/images/fe37b80e-da8a-4225-b27b-dfbb5d763c01.jpeg", alt: "Additional photos" },
      { src: "/images/3c90338e-86b4-423f-aae1-279e0ccc3a18.jpeg", alt: "Additional photos" },
      { src: "/images/862d936c-0f34-4e50-af87-b519e2781d19.jpeg", alt: "Additional photos" },
      { src: "/images/79addceb-8c2d-419b-80ff-e29af426a94c.jpeg", alt: "Additional photos" },
    ],
  },
];

// Flat ordered list of all lightbox photos, deduplicated by src, first-occurrence order.
export const allPhotos: TourPhoto[] = (() => {
  const seen = new Set<string>();
  const flat: TourPhoto[] = [];
  for (const cat of photoTour) {
    for (const p of cat.photos) {
      if (!seen.has(p.src)) {
        seen.add(p.src);
        flat.push(p);
      }
    }
  }
  return flat;
})();
