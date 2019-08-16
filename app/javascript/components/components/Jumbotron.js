import React from "react";

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">ThoughtFull</h1>
          <p className="lead" style={{ margin: 20, width: "90%" }}>
            Your life is full of interesting stories and moments of
            significance: discover them! Slow time down and find meaning through
            ThoughtFull, the app that makes daily reflection an easy practice,
            and never lose another day again.{" "}
          </p>
        <hr className="my-4" />
        <p>
          What made today different from every day in your life that came before
          it?
        </p>
          <a className="btn btn-info btn-lg" href="/about" role="button">
          🔍 Learn more
          </a>
      </div>
    );
  }
}

export default Jumbotron;
