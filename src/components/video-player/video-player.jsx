import React from 'react';
import PropTypes from 'prop-types';
import filmProp from '../../prop-types/film.prop';

const VideoPlayer = ({film, styles}) => {
  const {previewVideoLink, previewImage} = film;

  return (
    <video
      src={previewVideoLink}
      poster={previewImage}
      style={styles}
      autoPlay
    />
  );
};

VideoPlayer.propTypes = {
  film: filmProp.isRequired,
  styles: PropTypes.object
};


export default VideoPlayer;
