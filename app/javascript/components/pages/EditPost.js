import React from "react"
import PropTypes from "prop-types"
import { Form, Button, Container } from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
import ActiveStorageProvider from 'react-activestorage-provider'

class EditPost extends React.Component {
  constructor(props){
    super(props)
    const{ post } = props
    this.state = {
      postAttrs: {},
      editSuccess: false,
      post
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

  localSubmit = (e) => {
    e.preventDefault()
    const { editPost } = this.props
    const { postAttrs } = this.state
    editPost(postAttrs.id, postAttrs)
    .then(() => {
      this.setState({editSuccess: true})
    })
  }

  handleSubmit = (post)=>{
    this.setState({ post })
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
    const { postAttrs, editSuccess, post } = this.state
    return (
      <React.Fragment>
        {editSuccess && <Redirect to="/" /> }
        <h1>Edit Post</h1>

        <Form onSubmit={this.localSubmit}>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control required onChange={this.onChange} name="date" value={postAttrs.date} type="date" placeholder="Enter date" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Body</Form.Label>
            <Form.Control required onChange={this.onChange} name="body" value={postAttrs.body} type="text" placeholder="Enter thought" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control onChange={this.onChange} name="address" value={postAttrs.address} type="text" placeholder="Enter address" />
          </Form.Group>

          <div className="custom-control custom-switch">
            <input onChange={this.togglesPublicView} name="public_view" type="checkbox" className="custom-control-input" id="customSwitch1" checked={postAttrs.public_view}></input>
            <label className="custom-control-label" htmlFor="customSwitch1">Make thought public?</label>
          </div>

          <Container>
            { post && post.image_url &&
              <div>
                <h2>Your Image is: </h2>
                <img src={post.image_url } maxwidth="100%" />
              </div>
            }
            <ActiveStorageProvider
              endpoint={{
                path: `/posts/${this.props.match.params.id}`,
                model: 'Post',
                attribute: 'image',
                method: 'PUT',
              }}
              onSubmit={this.handleSubmit}
              render={({ handleUpload, uploads, ready }) => (
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    disabled={!ready}
                    onChange={e => handleUpload(e.currentTarget.files)}
                  />

                  {uploads.map(upload => {
                    switch (upload.state) {
                      case 'waiting':
                        return <p key={upload.id}>Waiting to upload {upload.file.name}</p>
                      case 'uploading':
                        return (
                          <p key={upload.id}>
                            Uploading {upload.file.name}: {upload.progress}%
                          </p>
                        )
                      case 'error':
                        return (
                          <p key={upload.id}>
                            Error uploading {upload.file.name}: {upload.error}
                          </p>
                        )
                      case 'finished':
                        return (
                          <p key={upload.id}>Finished uploading {upload.file.name}</p>
                        )
                    }
                  })}
                </div>
              )}
            />
          </Container>
          <Button type="submit" variant="primary">
            Save & Update
          </Button>
        </Form>

      </React.Fragment>
    );
  }
}

export default EditPost
