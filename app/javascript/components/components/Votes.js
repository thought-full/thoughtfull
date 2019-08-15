import React from "react";
import PropTypes from "prop-types";

class Votes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button
          id="upButton"
          type="button"
          className="vote"
          onClick={this.props.handleUpvote}
        >
          <svg className="upArrow" viewBox="0 0 11.5 6.4" xmlSpace="preserve">
            <path
              d="M11.4,5.4L6,0C5.9-0.1,5.8-0.1,5.8-0.1c-0.1,0-0.2,0-0.2,0.1
            L0.1,5.4C0,5.6,0,5.7,0.1,5.9l0.4,0.4c0.1,0.1,0.3,0.1,0.4,0l4.8-4.8l4.8,4.8c0.1,0.1,0.3,0.1,0.4,0l0.4-0.4
            C11.5,5.7,11.5,5.6,11.4,5.4z"
            />
          </svg>
        </button>
        <h6 className="vote-count" id="vote-count">
          {this.props.votes}
        </h6>
        <button
          id="downButton"
          className="vote"
          type="button"
          onClick={this.props.handleDownvote}
        >
          <svg
            className="downArrow"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 11.5 6.4"
            xmlSpace="preserve"
          >
            <path
              d="M0.1,0.9l5.4,5.4c0.1,0.1,0.1,0.1,0.2,0.1c0.1,0,0.2,0,0.2-0.1
            l5.4-5.4c0.1-0.1,0.1-0.3,0-0.4L11,0c-0.1-0.1-0.3-0.1-0.4,0L5.8,4.8L0.9,0C0.8-0.1,0.6-0.1,0.5,0L0.1,0.4C0,0.6,0,0.7,0.1,0.9z"
            />
          </svg>
        </button>
      </React.Fragment>
    );
  }
}

export default Votes;
