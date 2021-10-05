const film = {
  "id": 1,
  "name": `The Grand Budapest Hotel`,
  "previewImage": `img/moonrise-kingdom.jpg`,
  "backgroundImage": `img/the-grand-budapest-hotel-bg.jpg`,
  "posterImage": `img/the-grand-budapest-hotel-poster.jpg`,
  "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  "rating": 8.9,
  "scoresCount": 240,
  "director": `Wes Andreson`,
  "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  "runTime": 99,
  "genre": `Comedy`,
  "released": 2014,
};

export const genres = [
  `All`,
  `Comedies`,
  `Crime`,
  `Documentary`,
  `Dramas`,
];

export const films = new Array(10).fill(film);
