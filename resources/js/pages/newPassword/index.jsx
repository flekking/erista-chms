import BasePage from '@erista/core/page'
import AuthLayout from '@erista/layouts/auth'

export default class NewPassword extends BasePage {
  render() {
    return (
      <AuthLayout>
        <div>new password</div>
      </AuthLayout>
    )
  }
}
