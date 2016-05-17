import '../main.scss'

import React from 'react';

function handleRetweet(event) {
  event.target.style.color = '#19CF86';
  alert("You retweeted this!");
  // event.target returns the element that contains the event
}

function handleLike(event) {
  event.target.style.color = '#E2264D';
  alert("You liked this!");
}

const Tweet = props => {
  return (
    <div className="tweet-div">
      <div className="row">
        <div className="small-12 columns">
          <p id="userimage"><img src={props.user_image}/></p>
          <p id="userinfo"> {props.name} <span className="faded-header">@{props.username} {props.date.toDateString()}</span></p>
          <p><strong>{props.text}</strong></p>
        </div>
      </div>
      <div className="row">
        <div className="small-8 small-centered columns">
          <p><img src={props.tweet_image}/></p>
        </div>
      </div>
      <div className="row">
        <div className="small-6 small-centered columns">
          <i className="fa fa-reply" aria-hidden="true" onClick={event => alert("You replied to this!") }></i>
          <i className="fa fa-retweet colortochange" aria-hidden="true" onClick={handleRetweet}> {props.num_of_retweets} </i>
          <i className="fa fa-heart colortochange" aria-hidden="true" onClick={handleLike}>{props.num_of_likes}</i>
          <i className="fa fa-ellipsis-h" aria-hidden="true" onClick={event => alert("You added this as a favorite!") }></i>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
