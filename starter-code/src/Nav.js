import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div>

        <nav>
          <Link to="/">Home</Link>
        </nav>
        
      </div>
    )
  }
}
