import PropTypes from 'prop-types';

const {shape, number, string, arrayOf} = PropTypes;

export default shape({
  id: number.isRequired,
  name: string.isRequired,
  backgroundImage: string.isRequired,
  backgroundColor: string.isRequired,
  previewImage: string.isRequired,
  description: string.isRequired,
  rating: number.isRequired,
  scoresCount: number.isRequired,
  director: string.isRequired,
  starring: arrayOf(string).isRequired,
  runTime: number.isRequired,
  genre: string.isRequired,
  released: number.isRequired,
  previewVideoLink: string.isRequired,
});
