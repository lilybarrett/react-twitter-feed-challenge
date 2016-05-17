import React from 'react';
import Tweet from './Tweet';
import data from '../constants/data';

const TwitterFeed = props => {
  let tweets = props.data.map(tweet => {
    let tweet_image
    if (tweet.entities.media) {
      tweet_image=tweet.entities.media[0].media_url
    }
    return (
      <Tweet
        key={tweet.id_str}
        name={tweet.user.name}
        username={tweet.user.screen_name}
        text={tweet.text.replace(/pic(.*)/, "")}
        date={new Date(parseInt(tweet.timestamp_ms, 10))}
        user_image={tweet.user.profile_image_url}
        tweet_image={tweet_image}
        num_of_likes={tweet.favorite_count}
        num_of_retweets={tweet.retweet_count}
      />
    );
  });

  return (
    <div>
      {tweets}
    </div>
  );
};

export default TwitterFeed;
