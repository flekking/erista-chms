import Page from '@erista/core/page'
import AuthLayout from '@erista/layouts/auth'

import { Heading } from '@erista/components/atoms/typography'
import { Link } from '@erista/components/atoms/link'
import LogoutForm from '@erista/forms/logout'

class Logout extends Page {
  render() {
    return (
      <LogoutForm
        onSuccess={ e => this.onSuccess(e) }
      />
    )
  }

  onSuccess(e) {
    this.props.navigation('/web/login')
  }
}

import { useNavigate } from 'react-router-dom'
export default function (props) {
  const navigation = useNavigate()
  return <Logout {...props} navigation={navigation}/>
}
