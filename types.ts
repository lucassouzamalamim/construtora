export interface Project {
  id: string;
  title: string;
  slug: string;
  city: string;
  neighborhood: string;
  status: 'Lançamento' | 'Em Obras' | 'Entregue';
  image: string;
  gallery: string[];
  description: string;
  details: {
    dorms: string;
    area: string;
    suites: string;
    parking: string;
  };
  features: string[];
  lat: number;
  lng: number;
}

export interface FilterState {
  status: string | null;
  city: string | null;
}