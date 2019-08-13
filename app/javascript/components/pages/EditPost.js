import React from "react"
import PropTypes from "prop-types"
import { Form, Button } from 'react-bootstrap'
import {Redirect} from 'react-router-dom'

class EditPost extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      postAttrs: {},
      editSuccess: false
    }
  }

  componentDidMount(){
    this.getPost()
  }

  componentDidUpdate(prevProps){
      if (prevProps.match.params.id != this.props.match.params.id) {
        this.getPost()
      }
  }

  localSubmit = () => {
    const { editPost } = this.props
    const { postAttrs } = this.state
    editPost(postAttrs.id, postAttrs)
    .then(() => {
      this.setState({editSuccess: true})
    })
  }

  onChange = (e) => {
    const { postAttrs } = this.state
    const { name, value } = e.target
    postAttrs[name] = value
    this.setState({ postAttrs })
  }

  togglesPublicView = () => {
    const { postAttrs } = this.state
    const { public_view } = postAttrs
    postAttrs.public_view = public_view === false ? true : false;
    this.setState({ postAttrs })
  }

  getPost(){
    const { showPost } = this.props
    showPost(this.props.match.params.id)
    .then((response) => {
      this.setState({postAttrs: response})
    })
  }

  render () {
    const { postAttrs } = this.state
    const { editSuccess } = this.state
    return (
      <React.Fragment>
        {editSuccess && <Redirect to="/" /> }
        <h1>Edit Post</h1>

        <Form>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control onChange={this.onChange} name="date" value={postAttrs.date} type="date" placeholder="Enter date" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Body</Form.Label>
            <Form.Control onChange={this.onChange} name="body" value={postAttrs.body} type="text" placeholder="Enter thought" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control onChange={this.onChange} name="address" value={postAttrs.address} type="text" placeholder="Enter address" />
          </Form.Group>

          <div className="custom-control custom-switch">
            <input onChange={this.togglesPublicView} name="public_view" type="checkbox" className="custom-control-input" id="customSwitch1" checked={postAttrs.public_view}></input>
            <label className="custom-control-label" htmlFor="customSwitch1">Make thought public?</label>
          </div>

          <Button onClick={this.localSubmit} variant="primary">
            Save & Update
          </Button>
        </Form>

      </React.Fragment>
    );
  }
}

export default EditPost
