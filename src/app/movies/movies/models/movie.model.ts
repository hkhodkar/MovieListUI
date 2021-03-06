export interface MoviesModel {
  title: string;
  summary: string;
  poster: string;
  inTheaters: boolean;
  releaseDate: Date;
}

export interface CreateMovieModel {
  title: string;
  summary: string;
  poster: File;
  inTheaters: boolean;
  releaseDate: Date;
  trailer: string;
  genreIds: number[];
  theatersIds: number[];
}
