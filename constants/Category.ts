export interface CategoryProps {
  image: string;
  name: string;
  router: string;
}

export const CategoryList: CategoryProps[] = [
  {
    image:
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730187750/travel-app/categories/tour_guide_travel_agent-512_no2hd9.webp",
    name: "Tour",
    router: "/tour",
  },
  {
    image:
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730187808/travel-app/categories/Service_Filled_Outline_-122-64_cwfvqq.webp",
    name: "Khách sạn",
    router: "helo",
  },
  {
    image:
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730187844/travel-app/categories/19-game-ticket-sports-buy-64_mo6lcg.webp",
    name: "Vé tham quan",
    router: "helo",
  },
  {
    image:
      "https://res.cloudinary.com/dcp33adrf/image/upload/v1730516869/travel-app/categories/map-128_aw9olm.webp",
    name: "Map",
    router: "/travel_map",
  },
];
