import Middleware from '@erista/core/middleware'

class Authenticated extends Middleware {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: true
    }
  }

  render() {
    return this.state.loggedIn && this.props.children
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: '/ajax/utils/authenticated'
    })
      .then(res => {
        if ( ! res.data.authenticated) {
          this.props.navigation('/web/login')
        } else {
          this.setState(state => ({ loggedIn: true }))
        }
      })
      .catch(err => {
        this.props.navigation('/web/login')
      })
  }
}

import { useNavigate } from 'react-router-dom'
export default function (props) {
  const navigation = useNavigate()
  return <Authenticated {...props} navigation={navigation}/>
}
