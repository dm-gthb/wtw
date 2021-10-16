import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import filmProp from '../../prop-types/film.prop';
import {AppRoute} from '../../constants';
import VideoPlayer from '../video-player/video-player';
import videoStyles from './video-styles';
import browserHistory from '../../browser-history';

const PreviewCard = ({className, film, isVideoPlaying, onPlayVideo, onStopVideo}) => {
  const {id, name, previewImage, previewVideoLink} = film;
  const handleMouseEnter = () => onPlayVideo(id);
  const handleMouseLeave = () => onStopVideo();

  const renderContent = () => {
    if (isVideoPlaying) {
      return (
        <VideoPlayer
          src={previewVideoLink}
          poster={previewImage}
          styles={videoStyles}
        />
      );
    }

    return (
      <>
        <div className="small-movie-card__image">
          <img src={previewImage} alt={name} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <Link
            className="small-movie-card__link"
            to={`${AppRoute.FILMS}/${id}`}
          >
            {name}
          </Link>
        </h3>
      </>
    );
  };

  return (
    <article
      className={classNames(`small-movie-card`, className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => browserHistory.push(`${AppRoute.FILMS}/${id}`)}
    >
      {renderContent()}
    </article>
  );
};

PreviewCard.propTypes = {
  className: PropTypes.string.isRequired,
  film: filmProp.isRequired,
  isVideoPlaying: PropTypes.bool.isRequired,
  onPlayVideo: PropTypes.func.isRequired,
  onStopVideo: PropTypes.func.isRequired,
};

export default React.memo(PreviewCard, (prevProps, nextProps) => {
  return prevProps.isVideoPlaying === nextProps.isVideoPlaying;
});
