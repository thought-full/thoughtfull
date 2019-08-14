import React from "react";
import Image from './images/tf_logo_white_bkgd.png';

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">ThoughtFull</h1>
        <div style={{display: "flex", flexDirection: "row"}}>
        <img src= {Image} style= {{margin: 0, width: 120, height: 120}}></img>
        <p className="lead" style= {{margin: 20, width: 1100}}>
          Your life is full of interesting stories and moments of significance,
          discover them. Slow time down and find meaning through ThoughtFull,
          the app that makes daily reflection an easy practice, and never lose
          another day again.{" "}
        </p>
        </div>
        <hr className="my-4" />
        <p>
          What made today different from every day in your life that came before
          it?
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="/about" role="button">
            Learn more
          </a>
        </p>
      </div>
    );
  }
}

export default Jumbotron;
