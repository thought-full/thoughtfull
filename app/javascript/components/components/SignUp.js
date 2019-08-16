import React from "react";
import PropTypes from "prop-types";
import { Modal, ButtonToolbar, Button, Form } from "react-bootstrap";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      form: {
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  }

  toggleModalShow = () => {
    this.setState({ modalShow: !this.state.modalShow });
  };

  onChange = e => {
    const { form } = this.state;
    const { name, value } = e.target;
    form[name] = value;
    this.setState({ form });
  };

  handleUserSignUp = () => {
    const user = { user: this.state.form };
    console.log(user);
    return fetch("/users", {
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
      method: "POST"
    }).then(resp => {
      if (resp.redirected === true) {
        window.location.replace("/");
      } else {
        alert("Sign up information incorrect");
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <ButtonToolbar>
          <Button variant="outline-info" onClick={this.toggleModalShow}>
            Sign Up
          </Button>

          <Modal
            show={this.state.modalShow}
            onHide={this.toggleModalShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Sign Up
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    onChange={this.onChange}
                    id="username"
                    name="username"
                    value={this.state.form.username}
                    type="text"
                    placeholder="Enter username"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    onChange={this.onChange}
                    id="email"
                    name="email"
                    value={this.state.form.email}
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password (6 characters minimum) </Form.Label>
                  <Form.Control
                    onChange={this.onChange}
                    id="password"
                    name="password"
                    value={this.state.form.password}
                    type="password"
                    placeholder="Enter password"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password confirmation</Form.Label>
                  <Form.Control
                    onChange={this.onChange}
                    id="password_confirmation"
                    name="password_confirmation"
                    value={this.state.form.password_confirmation}
                    type="password"
                    placeholder="Enter password again"
                  />
                </Form.Group>

                <Button onClick={this.handleUserSignUp} variant="outline-info">
                  Sign Up
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.toggleModalShow}>Close</Button>
            </Modal.Footer>
          </Modal>
        </ButtonToolbar>
      </React.Fragment>
    );
  }
}

export default SignUp;
