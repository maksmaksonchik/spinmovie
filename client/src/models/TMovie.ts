type nameObj = {
  name: string;
}

export type TFetchedMovie = {
  poster: {
    url: string;
    previewUrl: string;
  };
  name: string;
  alternativeName: string | null;
  year: number;
  genres: nameObj[];
  countries: nameObj[];
}

export type TApiResponse = {
  docs: TFetchedMovie[];
}

export type TMovie = {
  poster: string;
  name: string;
  alternativeName?: string;
  year: number;
  genres: string[];
  countries: string[];
}
