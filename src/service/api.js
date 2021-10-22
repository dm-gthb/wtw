import axios from 'axios';
import {APIRoute, FavoriteStatus, HttpCode, HttpMethod} from '../constants';

const BACKEND_URL = ``;
const REQUEST_TIMEOUT = 5000;

class API {
  constructor(baseURL, timeout, onUnauthorized) {
    this._api = axios.create({
      baseURL,
      timeout,
      withCredentials: true
    });
    this._onUnauthorized = onUnauthorized;
    this._bindResponseInterceptors();
  }

  _bindResponseInterceptors() {
    this._api.interceptors.response.use(this._handleSuccessedResponse, this._handleFailedResponse);
  }

  _handleSuccessedResponse(response) {
    return response;
  }

  _handleFailedResponse(err) {
    const {response} = err;
    if (response.status === HttpCode.UNAUTHORIZED) {
      this._onUnauthorized();
      throw err;
    }

    throw err;
  }

  async _load(url, options) {
    const response = await this._api.request({url, ...options});
    return response.data;
  }

  async getFilms() {
    const rawFilmsData = await this._load(APIRoute.FILMS);
    return rawFilmsData.map(this._transformFilmServerData);
  }

  async getPromoFilm() {
    const rawFilmData = await this._load(`${APIRoute.FILMS}${APIRoute.PROMO}`);
    return this._transformFilmServerData(rawFilmData);
  }

  async getFavoritesFilms() {
    const rawFilmsData = await this._load(APIRoute.FAVOFITE);
    return rawFilmsData.map(this._transformFilmServerData);
  }

  async addFilmToFavorites(filmId) {
    const rawFilmData = await this._load(`${APIRoute.FAVOFITE}/${filmId}/${FavoriteStatus.ADDING}`, {
      method: HttpMethod.POST,
    });
    return this._transformFilmServerData(rawFilmData);
  }

  async removeFilmFromFavorites(filmId) {
    const rawFilmData = await this._load(`${APIRoute.FAVOFITE}/${filmId}/${FavoriteStatus.REMOVING}`, {
      method: HttpMethod.POST,
    });
    return this._transformFilmServerData(rawFilmData);
  }

  async checkAuth() {
    const userData = await this._load(`${APIRoute.LOGIN}`);
    return this._transformUserServerData(userData);
  }

  async login(data) {
    const userData = await this._load(APIRoute.LOGIN, {
      method: HttpMethod.POST,
      data
    });
    return this._transformUserServerData(userData);
  }

  async logout() {
    const result = await this._load(APIRoute.LOGOUT);
    return result;
  }

  async getFilmReviews(filmId) {
    const reviews = await this._load(`${APIRoute.REVIEWS}/${filmId}`);
    return reviews;
  }

  async postReview({filmId, formData}) {
    const postedReview = await this._load(`${APIRoute.REVIEWS}/${filmId}`, {
      method: HttpMethod.POST,
      data: formData
    });
    return postedReview;
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
      backgroundColor: film.background_color,
      isFavorite: film.is_favorite
    };
  }

  _transformUserServerData(user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar_url
    };
  }
}

export const createAPI = (onUnauthorized) => new API(BACKEND_URL, REQUEST_TIMEOUT, onUnauthorized);
