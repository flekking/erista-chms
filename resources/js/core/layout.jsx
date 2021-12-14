import React, { Component } from 'react'
import Authenticated from '@erista/middlewares/authenticated'
import Unauthenticated from '@erista/middlewares/unauthenticated'

export default class Layout extends Component {
  renderAuth() {
    let element
    let content = this.content()

    if (this.props.authentication) {
      if (this.props.authenticated) {
        element = (
          <Authenticated>
            {content}
          </Authenticated>
        )
      }
      if (this.props.unauthenticated) {
        element = (
          <Unauthenticated>
            {content}
          </Unauthenticated>
        )
      }
    } else {
      element = content
    }

    return element
  }
}
