import React from "react"
import PropTypes from "prop-types"
class NewPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        date: "",
        body: "",
        public_view: ""
      }
    }
  }

  localSubmit = () => {
    const { onSubmit } = this.props
    const { form } = this.state
    onSubmit(form)
  }

  render () {
    return (
      <React.Fragment>
        <h1>Create a New Post</h1>
        <button onClick={this.localSubmit}>Submit</button>
      </React.Fragment>
    );
  }
}

export default NewPost
