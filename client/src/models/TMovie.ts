type nameObj = {
  name: string;
}

export type TWatchItem = {
      name: string;
      logo: {
        url: string;
      };
      url: string;
    }

export type TFetchedMovie = {
  id: number;
  poster: {
    url: string;
    previewUrl: string;
  };
  name: string;
  alternativeName: string | null;
  year: number;
  genres: nameObj[];
  countries: nameObj[];
  rating: {
    kp: number;
  }
  movieLength: number;
  watchability: {
    items: TWatchItem[];
  }
}

export type TSearchedMovie = {
  id: number;
  poster: string;
  name: string;
  alternativeName?: string;
  year: number;
  genres: string[];
  countries: string[];
  rating: number;
  movieLength: number;
}

export type TSearchResponse = {
  docs: TSearchedMovie[];
  total: number;
  limit: number;
  page: number;
  pages: number
}

export type TApiResponse = {
  docs: TFetchedMovie[];
  total: number;
  limit: number;
  page: number;
  pages: number
}

export type TMovie = {
  id: number;
  poster: string;
  name: string;
  alternativeName?: string;
  year: number;
  genres: string[];
  countries: string[];
  rating: string;
  movieLength: string;
  watchability: TWatchItem[]
}
