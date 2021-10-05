const film = {
  "name": `The Grand Budapest Hotel`,
  "previewImage": `img/moonrise-kingdom.jpg`,
  "backgroundImage": `img/bg-the-grand-budapest-hotel.jpg`,
  "posterImage": `img/the-grand-budapest-hotel-poster.jpg`,
  "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  "rating": 8.9,
  "scoresCount": 240,
  "director": `Wes Andreson`,
  "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  "runTime": 99,
  "genre": `Comedy`,
  "released": 2014,
  "previewVideoLink": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

export const genres = [
  `All`,
  `Comedies`,
  `Crime`,
  `Documentary`,
  `Dramas`,
];

export const films = new Array(10).fill(``).map((item, i) => ({...film, id: i}));
