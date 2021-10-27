import {
  createServer,
  Model,
  belongsTo,
  hasMany,
  Response,
  Serializer
} from 'miragejs';
import {APIRoute, HttpCode} from '../constants';
import {
  admin as mockAdmin,
  user as mockUser,
  generateComment,
  films,
} from '../mocks/mocks';

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
      server.create(`admin`, mockAdmin);
      const user = server.create(`user`, mockUser);
      for (const film of films) {
        const currentFilm = server.create(`film`, film);
        server.create(`comment`, {
          ...generateComment(),
          user,
          film: currentFilm,
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
      this.get(APIRoute.FAVORITE, (schema) => {
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
      this.post(`${APIRoute.FAVORITE}/:filmId/:status`, (schema, request) => {
        const isAuth = schema.admins.first().attrs.isAuth;
        if (!isAuth) {
          return new Response(HttpCode.UNAUTHORIZED);
        }
        const filmId = request.params.filmId;
        const status = +request.params.status;
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
