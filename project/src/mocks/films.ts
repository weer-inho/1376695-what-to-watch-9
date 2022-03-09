import {FilmsType} from '../types/films';

export const films: FilmsType = [
  {
    title: 'The Grand Budapest Hotel',
    genre: 'Drama',
    year: 2014,
    preview_image: 'img/the-grand-budapest-hotel-poster.jpg',
    rating: 8.9,
    director: 'Wes Anderson',
    run_time: '1h 39m',
    actors: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    reviews: [
      {
        textReview: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mitte',
        ratingReview: 8.9,
        authorReview: 'Kate Muir',
        dateReview: 'December 24, 2016',
      },
      {
        textReview: 'Andersons films are too precious for some, but for those of us willing to lose',
        ratingReview: 8.0,
        authorReview: 'Bill Good',
        dateReview: 'November 18, 2015',
      },
      {
        textReview: 'The mannered, madcap proceedings are often delightful, occasionally silly',
        ratingReview: 7.2,
        authorReview: 'Mathew Lickona',
        dateReview: 'December 20, 2019',
      }
    ],
    description: 'Не стану тут долго расписывать, что же такое блины, думаю, вы и так все знаете. Блины бывают дрожжевые и бездрожжевые...',
  },
];
