import React from "react"
import PropTypes from "prop-types"

class EditPost extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      postId: null,
      postAttrs: {}
    }
  }
  componentDidUpdate(prevProps){
      if (prevProps.match.params.id != this.props.match.params.id) {
        this.getPost()
      }
  }

  // getPost(){
  // // fetch posts from show method
  // }

  render () {
    return (
      <React.Fragment>


      </React.Fragment>
    );
  }
}

export default EditPost
