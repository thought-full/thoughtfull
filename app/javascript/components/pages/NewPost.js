import React from "react"
import PropTypes from "prop-types"
import { Form, Button } from 'react-bootstrap'

class NewPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        date: "",
        body: "",
        public_view: false
      }
    }
  }

  localSubmit = () => {
    const { onSubmit } = this.props
    const { form } = this.state
    onSubmit(form)
  }

  onChange = (e) => {
    const { form } = this.state
    const { name, value } = e.target
    form[name] = value
    this.setState({ form })
  }

  togglesPublicView = () => {
    const { form } = this.state
    const { public_view } = form
    form.public_view = public_view === false ? true : false;
    this.setState({ form })
  }

  render () {
    const { date, body, public_view } = this.state.form
    return (
      <React.Fragment>
        <h1>Create a New Post</h1>

        <Form>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control onChange={this.onChange} name="date" value={date} type="text" placeholder="Enter date" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Body</Form.Label>
            <Form.Control onChange={this.onChange} name="body" value={body} type="text" placeholder="Enter thought" />
          </Form.Group>

          <div className="custom-control custom-switch">
            <input onChange={this.togglesPublicView} name="public_view" type="checkbox" className="custom-control-input" id="customSwitch1" checked={public_view}></input>
            <label className="custom-control-label" htmlFor="customSwitch1">Make thought private?</label>
          </div>




          <Button onClick={this.localSubmit} variant="primary">
            Submit
          </Button>
        </Form>

      </React.Fragment>
    );
  }
}

export default NewPost
