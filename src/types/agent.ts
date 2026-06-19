export type Agent = {
  slug: string;
  name: string;
  company: string;
  reraId: string;
  city: string;
  localities: string[];
  specialization: string;
  plotsForSale: number;
  yearsActiveLabel: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};
