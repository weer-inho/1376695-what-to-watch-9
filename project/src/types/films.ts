export type reviewType = {
  textReview: string,
  ratingReview: number,
  authorReview: string,
  dateReview: string,
}

export type FilmsType = {
    id: number,
    title: string,
    genre: string,
    year: number,
    previewImage: string,
    rating: number,
    director: string,
    runTime: string,
    description: string,
    actors: string[],
    reviews: reviewType[],
};
