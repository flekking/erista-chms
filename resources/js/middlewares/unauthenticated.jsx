import Middleware from '@erista/core/middleware'
import { Navigate } from 'react-router-dom'

export default class Authenticated extends Middleware {
  render() {
    if (this.isNotLoggedIn()) {
      return (
        this.props.children
      )
    } else {
      return (
        <Navigate replace to="/web/"/>
      )
    }
  }
  
  isNotLoggedIn() {
    return true
  }
}
