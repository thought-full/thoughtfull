import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import Chris from "../components/images/chris.jpeg";
import Dylan from "../components/images/dylan.jpeg";
import Jason from "../components/images/jason.jpeg";
import Randy from "../components/images/randy.png";
import Github from "../components/images/githublogo.svg";
import LinkedIn from "../components/images/linkedinlogo.png";
import Logo from "../components/images/tf_logo_white_bkgd.png";

class About extends React.Component {
  render() {
    const icon = { width: "25%" };
    const margin = { textAlign: "justified", margin: "0 13%" };
    const text = { textAlign: "center" };
    const card = { width: "18rem" };

    return (
      <React.Fragment>
        <br />
        <hr style={margin} />
        <br />
        <h2 style={text}>Our Vision</h2>
        <p style={margin}>
          {" "}
          Each one of our lives is filled of small moments of significance: of
          transformation and realization. However, our minds are crowded with
          the endless distractions of today's world, and we neglect to capture
          these meaningful stories. Here at ThoughtFull, our goal is to provide
          a platform for users to take some time each day to ask, "What made
          today different than any other?", to recollect the little moments, and
          to discover what is truly significant.{" "}
        </p>
        <br />
        <hr style={margin} />
        <br />
        <h2 style={text}>Our Story</h2>
        <p style={margin}>
          {" "}
          ThoughtFull began in August of 2019 as a capstone project for a
          three-month long Web Developer bootcamp in downtown San Diego. It has
          since grown from a idea formed during a brainstorm into a complete
          project, and we look forward to how ThoughtFull will continue to grow
          in the future.
        </p>
        <p style={margin}>
          Today, ThoughtFull has been deployed, and the team is continuing to
          add features that will improve the channels with which our users
          interact with one another and with their own stories in meaningful
          ways.
        </p>
        <br />
        <hr style={margin} />
        <br />
        <h2 style={text}>We Are ThoughtFull:</h2>
        <br />
        <CardDeck style={{ margin: "0 12%" }}>
          <Card className="card border-light mb-3" style={card}>
            <Card.Img src={Chris} />
            <Card.Body>
              <Card.Title>Chris Postma</Card.Title>
              <Card.Text>
                Full-stack web developer backed by 10 years of professional
                experience in data management, clinical research, and healthcare
                administration. Passionate about design, learning new
                technologies, and analytical approaches to problem solving in
                collaborative environments.
              </Card.Text>
              <Card.Link href="https://github.com/cjrpostma">
                <img src={Github} style={icon} />
              </Card.Link>
              <Card.Link href="https://www.linkedin.com/in/cjrpostma/">
                <img src={LinkedIn} style={icon} />
              </Card.Link>
            </Card.Body>
          </Card>
          <Card className="card border-light mb-3" style={card}>
            <Card.Img src={Dylan} />
            <Card.Body>
              <Card.Title>Dylan Salay</Card.Title>
              <Card.Text>
                Full stack web developer, backed by 4+ years of experience as a
                Financial Analyst. I am passionate about collaborating with
                others, and using my analytical background to solve problems and
                develop creative solutions.
              </Card.Text>
              <Card.Link href="https://github.com/dylansalay">
                <img src={Github} style={icon} />
              </Card.Link>
              <Card.Link href="https://www.linkedin.com/in/dylansalay/">
                <img src={LinkedIn} style={icon} />
              </Card.Link>
            </Card.Body>
          </Card>
          <Card className="card border-light mb-3" style={card}>
            <Card.Img src={Jason} />
            <Card.Body>
              <Card.Title>Jason Cheng</Card.Title>
              <Card.Text>
                Innovative and analytical full-stack web developer. Excels in
                careful, deliberate decision-making and clear communication.
                Loves learning about people and hearing their stories, reading,
                and singing worship songs.
              </Card.Text>
              <Card.Link href="https://github.com/jasoncheng20">
                <img src={Github} style={icon} />
              </Card.Link>
              <Card.Link href="https://www.linkedin.com/in/jasoncheng20/">
                <img src={LinkedIn} style={icon} />
              </Card.Link>
            </Card.Body>
          </Card>
          <Card className="card border-light mb-3" style={card}>
            <Card.Img src={Randy} />
            <Card.Body>
              <Card.Title>Randy Tseng</Card.Title>
              <Card.Text>
                First took a Java class his last quarter at UCSD while finishing
                up a chemical engineering degree, and couldn't stop coding. If
                he's not coding, you can find him hanging out with church
                friends, playing board games, or drinking boba.
              </Card.Text>
              <Card.Link href="https://github.com/tsengrandy">
                <img src={Github} style={icon} />
              </Card.Link>
              <Card.Link href="https://www.linkedin.com/in/randytseng/">
                <img src={LinkedIn} style={icon} />
              </Card.Link>
            </Card.Body>
          </Card>
        </CardDeck>
        <hr style={margin} />
        <br />
        <br />
        <img
          src={Logo}
          style={{ width: "25%", display: "block", margin: "auto" }}
        />
        <br />
        <br />
      </React.Fragment>
    );
  }
}

export default About;
