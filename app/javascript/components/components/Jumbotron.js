import React from "react";

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">ThoughtFull</h1>
        <p className="lead">
          Your life is full of interesting stories and moments of significance,
          discover them. Slow time down and find meaning through ThoughtFull,
          the app that makes daily reflection an easy practice, and never lose
          another day again.{" "}
        </p>
        <hr className="my-4" />
        <p>
          What made today different from every day in your life that came before
          it?
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
          <a className="btn btn-primary btn-lg" href="/about" role="button">
            Learn more
          </a>
        </p>
      </div>
    );
  }
}

export default Jumbotron;
