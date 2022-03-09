export type reviewType = {
  textReview: string,
  ratingReview: number,
  authorReview: string,
  dateReview: string,
}

export type FilmsType = [
  {
    title: string
    genre: string,
    year: number,
    preview_image: string,
    rating: number,
    director: string,
    run_time: string,
    description: string,
    actors: string[],
    reviews: reviewType[],
  },
];
