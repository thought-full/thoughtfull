import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";
// Import geosearch
import { OpenStreetMapProvider } from "leaflet-geosearch";

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        date: "",
        body: "",
        public_view: false,
        address: "",
        latitude: null,
        longitude: null
      },
      createSuccess: false
    };
  }

  localSubmit = () => {
    const { createPost } = this.props;
    const { form } = this.state;
    createPost(form).then(() => {
      this.setState({ createSuccess: true });
    });
  };

  onChange = e => {
    const { form } = this.state;
    const { name, value } = e.target;
    form[name] = value;
    // Leaflet geosearch variables, setup, search
    const provider = new OpenStreetMapProvider();
    // Leaflet geosearch API call, takes address as string
    if (form.address) {
      provider.search({ query: form.address }).then(result => {
        form.latitude = result[0].y;
        form.longitude = result[0].x;
      });
    }
    this.setState({ form });
  };

  togglesPublicView = () => {
    const { form } = this.state;
    const { public_view } = form;
    form.public_view = public_view === false ? true : false;
    this.setState({ form });
  };

  render() {
    const { date, body, public_view, address } = this.state.form;
    const { createSuccess } = this.state;
    return (
      <React.Fragment>
        {createSuccess && <Redirect to="/" />}
        <h1>Create a New Post</h1>

        <Form onSubmit={this.localSubmit}>
          <Form.Group as={Col} md="3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              required
              onChange={this.onChange}
              id="date"
              name="date"
              value={date}
              type="date"
              placeholder="When was this?"
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Body</Form.Label>
            <Form.Control
              required
              onChange={this.onChange}
              id="body"
              name="body"
              value={body}
              type="text"
              placeholder="What are you thinking?"
            />
          </Form.Group>

          <Form.Group as={Col} md="4">
            <Form.Label>Address</Form.Label>
            <Form.Control
              onChange={this.onChange}
              id="address"
              name="address"
              value={address}
              type="text"
              placeholder="Where was this at?"
            />
          </Form.Group>

          <div className="custom-control custom-switch">
            <input
              onChange={this.togglesPublicView}
              name="public_view"
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1"
              checked={public_view}
            ></input>
            <label className="custom-control-label" htmlFor="customSwitch1">
              Make thought public?
            </label>
          </div>

          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default NewPost;
