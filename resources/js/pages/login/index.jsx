import BasePage from '@erista/core/page'
import AuthLayout from '@erista/layouts/auth'

import { Heading } from '@erista/components/atoms/typography'
import { Link } from '@erista/components/atoms/link'
import LoginForm from '@erista/forms/login'

class Login extends BasePage {
  render() {
    return (
      <AuthLayout>
        <div className="text-right">
          <Link href="#">Back</Link>
        </div>
        <Heading level="5">Log in to Erista</Heading>
        <LoginForm
          onLostPassword={ e => this.onLostPassword(e) }
          onCreateAccount={ e => this.onCreateAccount(e) }
        />
      </AuthLayout>
    )
  }

  onLostPassword(e) {
    this.props.navigation('/web/reset_password')
  }

  onCreateAccount(e) {

  }
}

import { useNavigate } from 'react-router-dom'
export default function (props) {
  const navigation = useNavigate()
  return <Login {...props} navigation={navigation}/>
}
