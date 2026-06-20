export type Agent = {
  id: string;
  user_id: string;
  plan_type: "Paid" | "Unpaid";
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
