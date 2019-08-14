import React from "react";
import PropTypes from "prop-types";
import { Modal, ButtonToolbar, Button, Form } from "react-bootstrap";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      form: {
        email: "",
        password: ""
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

  handleUserLogin = () => {
    const user = { user: this.state.form };
    console.log(user);
    return fetch("/users/sign_in", {
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
      method: "POST"
    }).then(resp => {
      if (resp.redirected === true) {
        window.location.replace("/");
      } else {
        alert("Sign in information incorrect");
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <ButtonToolbar>
          <Button variant="primary" onClick={this.toggleModalShow}>
            Sign In
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
                Log In
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    onChange={this.onChange}
                    id="email"
                    name="email"
                    value={this.state.email}
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={this.onChange}
                    id="password"
                    name="password"
                    value={this.state.password}
                    type="password"
                    placeholder="Enter password"
                  />
                </Form.Group>

                <Button onClick={this.handleUserLogin} variant="primary">
                  Submit
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

export default SignIn;
