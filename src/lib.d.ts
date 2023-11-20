type Breed = {
  weight: { imperial: string; metric: string };
  id: string;
  name: string;
  temperament: string;
  origin: string;
  country_code: string;
  description: string;
  life_span: string;
};

type Cat = {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: Breed[];
};
