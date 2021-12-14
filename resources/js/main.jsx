import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Pages from './pages'

class Main extends Component {
  render() {
    return (
      <Pages/>
    )
  }
}

ReactDOM.render(<Main/>, document.getElementById('app'))
