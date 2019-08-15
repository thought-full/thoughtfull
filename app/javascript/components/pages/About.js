import React from "react"
import { Card, Button } from "react-bootstrap"
import Chris from "../components/images/chris.jpeg";
import Dylan from "../components/images/dylan.jpeg";
import Jason from "../components/images/jason.jpeg";
import Randy from "../components/images/randy.png";


class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Our Vision</h2>
        <p>Each one of our lives is filled of small moments of significance: of transformation and realization. However, our minds are crowded with the endless distractions of today's world, and we neglect to capture these meaningful stories. Here at ThoughtFull, our goal is to provide a platform for users to take some time each day to ask, "What made today different than any other?", to recollect the little moments, and to discover what is truly significant. </p>
        <h2>Our Story</h2>
        <p>ThoughtFull began in August of 2019 as a capstone project for a three-month long Web Developer bootcamp in downtown San Diego. It has since grown from a idea formed during a brainstorm into a complete project, and we look forward to how ThoughtFull will continue to grow in the future.</p>
        <p>Today, ThoughtFull is presentable, and the team is continuing to add features that will improve the channels with which our users interact with one another and with their own stories in meaningful ways.</p>
        <h2>We Are ThoughtFull:</h2>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Chris} />
            <Card.Body>
              <Card.Title>Chris Postma</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Dylan} />
            <Card.Body>
              <Card.Title>Dylan Salay</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Jason} />
            <Card.Body>
              <Card.Title>Jason Cheng</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Randy} />
            <Card.Body>
              <Card.Title>Randy Tseng</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>



      </React.Fragment>
    )
  }
}

export default About
