import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'

import Home from './pages/Home'

class MainApp extends React.Component {
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <React.Fragment>
      < Home />
        <div className = "TopNav">
          {logged_in &&
            <div>
              <a href={sign_out_route}>Sign Out</a>
            </div>
        }
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }
        </div>
      </React.Fragment>
    );
  }
}

export default MainApp
