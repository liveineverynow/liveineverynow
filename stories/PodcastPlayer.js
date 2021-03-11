import React from 'react';
import PropTypes from 'prop-types';

export const PodcastPlayer = (props) => {

    const pub_date = new Date(props.pub_date)

    return (
        <>
            <h1>{ props.episode_num } - { props.title }</h1>
            <p>{ props.description }</p>
            <p>{ pub_date.toLocaleDateString('en-US', {year: 'numeric', day: "2-digit", month: 'short'}) }</p>
            <audio controls>
                <source src={ props.url } type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio> 
        </>
    );
};

PodcastPlayer.propTypes = {
  episode_num: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string,
  pub_date: PropTypes.string,
};

PodcastPlayer.defaultProps = {
    episode_num: "000",
    title: "Title",
    description: "Descriptions are really great!",
    url: "https://google.com",
    pub_date: "1969-04-20T07:00:00",
};