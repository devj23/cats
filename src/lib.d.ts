type Breed = {
  weight: { imperial: string; metric: string };
  id: string;
  name: string;
  temperament: string;
  origin: string;
  country_code: string;
  description: string;
  life_span: string;
  reference_image_id: string;
};

type Category = {
  id: number;
  name: string;
};

type Cat = {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: Breed[];
};
