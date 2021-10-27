import {
  createServer,
  Model,
  belongsTo,
  hasMany,
  Response,
  Serializer
} from 'miragejs';
import {APIRoute, HttpCode} from '../constants';
import {getRandomNum} from '../util/util';
import {films} from './mock';

export function makeServer() {
  return createServer({
    models: {
      film: Model.extend({
        comments: hasMany(),
      }),
      comment: Model.extend({
        film: belongsTo(),
        user: belongsTo(),
      }),
      user: Model.extend({
        comments: hasMany()
      }),
      admin: Model,
    },
    serializers: {
      comment: Serializer.extend({
        include: [`user`],
        embed: true
      }),
    },
    seeds(server) {
      server.create(`admin`, {
        name: `Admin Name`,
        email: `test@test.com`,
        [`avatar_url`]: `/img/avatar.jpg`,
        isAuth: false
      });

      const user = server.create(`user`, {
        name: `Name Surname`,
        email: `test@test.com`,
        [`avatar_url`]: `/img/avatar.jpg`,
      });

      for (const film of films) {
        const currentFilm = server.create(`film`, film);
        server.create(`comment`, {
          user,
          film: currentFilm,
          rating: getRandomNum(1, 10),
          comment: `Lorem lorem ipsum.`,
          date: Date.now(),
        });
        server.create(`comment`, {
          user,
          film: currentFilm,
          rating: getRandomNum(1, 10),
          comment: `Second Comment`,
          date: Date.now(),
        });
      }
    },

    routes() {
      this.namespace = `api`;
      this.get(APIRoute.FILMS, (schema) => {
        return schema.films.all().models;
      });
      this.get(`${APIRoute.FILMS}${APIRoute.PROMO}`, (schema) => {
        const film = schema.films.first();
        return film.attrs;
      });
      this.get(APIRoute.FAVOFITE, (schema) => {
        const favorites = schema.films.where({[`is_favorite`]: true});
        return favorites.models;
      });
      this.get(`${APIRoute.REVIEWS}/:filmId`, async (schema, request) => {
        const filmId = +request.params.filmId;
        const comments = schema.comments.where({filmId});
        return comments;
      });
      this.get(APIRoute.LOGIN, (schema) => {
        const admin = schema.admins.first().attrs;
        const isAuth = admin.isAuth;
        if (!isAuth) {
          return new Response(HttpCode.UNAUTHORIZED);
        }
        return admin;
      });
      this.get(APIRoute.LOGOUT, (schema) => {
        const admin = schema.admins.first();
        admin.update(`isAuth`, false);
        return null;
      });
      this.post(APIRoute.LOGIN, (schema) => {
        const admin = schema.admins.first();
        admin.update(`isAuth`, true);
        return admin.attrs;
      });
      this.post(`${APIRoute.FAVOFITE}/:filmId/:status`, (schema, request) => {
        const isAuth = schema.admins.first().attrs.isAuth;
        if (!isAuth) {
          return new Response(HttpCode.UNAUTHORIZED);
        }
        const filmId = request.params.filmId;
        const status = request.params.status;
        const film = schema.films.find(filmId);
        film.update(`is_favorite`, !!status);
        return film;
      });
      this.post(`${APIRoute.REVIEWS}/:filmId`, (schema, request) => {
        const filmId = +request.params.filmId;
        const newComment = JSON.parse(request.requestBody);
        const user = schema.admins.first();
        const film = schema.films.find(filmId);
        const newCommentAdded = schema.comments.create(
            {
              ...newComment,
              film,
              user,
              date: Date.now()
            });
        return newCommentAdded.attrs;
      });
    },
  });
}
