import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({src, poster, styles}) => {
  return (
    <video
      src={src}
      poster={poster}
      style={styles}
      autoPlay
      muted
    />
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  styles: PropTypes.object
};


export default VideoPlayer;
