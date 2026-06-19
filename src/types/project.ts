export type Project = {
  slug: string;
  name: string;
  description: string;
  locality: string;
  city: string;
  state: string;
  address: string;
  priceLabel: string;
  priceMin: number;
  currency: "INR";
  areaLabel: string;
  areaSqYd: number;
  roadWidth: string;
  approvedBy: string;
  amenities: string[];
  nearby: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  builder: {
    name: string;
    type: string;
    logo: string;
  };
};
