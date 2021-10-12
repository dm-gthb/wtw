import axios from 'axios';
import {AppRoute} from '../constants';

const BACKEND_URL = ``;
const REQUEST_TIMEOUT = 5000;

class API {
  constructor(baseURL, timeout) {
    this._api = axios.create({
      baseURL,
      timeout,
      withCredentials: true
    });
  }

  async _load(url, options) {
    const response = await this._api.request({url, ...options});
    return response.data;
  }

  async getFilms() {
    const rawFilmsData = await this._load(AppRoute.FILMS);
    return rawFilmsData.map(this._transformFilmServerData);
  }

  _transformFilmServerData(film) {
    return {
      id: film.id,
      name: film.name,
      previewImage: film.preview_image,
      backgroundImage: film.background_image,
      posterImage: film.poster_image,
      description: film.description,
      rating: film.rating,
      scoresCount: film.scores_count,
      director: film.director,
      starring: film.starring,
      runTime: film.run_time,
      genre: film.genre,
      released: film.released,
      previewVideoLink: film.preview_video_link,
    };
  }
}

export const createAPI = () => new API(BACKEND_URL, REQUEST_TIMEOUT);
