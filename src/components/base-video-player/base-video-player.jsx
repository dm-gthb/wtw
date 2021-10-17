import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = (props) => {
  const {
    src,
    poster,
    isPlaying,
    isMuted,
    onEnded,
    onLoad,
    className,
    styles,
  } = props;

  const videoRef = useRef();

  useEffect(() => {
    if (onLoad) {
      videoRef.current.oncanplaythrough = () => {
        onLoad(videoRef);
      };
    }

    return () => {
      videoRef.current.oncanplaythrough = null;
      videoRef.current.onplay = null;
      videoRef.current.onpause = null;
      videoRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <video
      src={src}
      ref={videoRef}
      muted={isMuted}
      onEnded={onEnded}
      onLoad={onLoad}
      poster={poster}
      className={className}
      style={styles}
    />
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool,
  onEnded: PropTypes.func,
  onLoad: PropTypes.func,
  className: PropTypes.string,
  styles: PropTypes.object,
};

export default VideoPlayer;
