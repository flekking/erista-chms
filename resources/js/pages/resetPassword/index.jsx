import BasePage from '@erista/core/page'
import AuthLayout from '@erista/layouts/auth'

export default class ResetPassword extends BasePage {
  render() {
    return (
      <AuthLayout>
        <div>reset password</div>
      </AuthLayout>
    )
  }
}
