import BasePage from '@erista/core/page'
import AuthLayout from '@erista/layouts/auth'

import { Heading, Paragraph } from '@erista/components/atoms/typography'
import { Link } from '@erista/components/atoms/link'
import ResetPasswordForm from '@erista/forms/resetPassword'

export default class ResetPassword extends BasePage {
  render() {
    return (
      <AuthLayout>
        <div className="text-right">
          <Link href="#">Back</Link>
        </div>
        <Heading level="5">Forgot your password?</Heading>
        <Paragraph className="text-gray-500">
          Don't fret! Just type in your email and we will send you a link to reset your password!
        </Paragraph>
        <ResetPasswordForm/>
      </AuthLayout>
    )
  }
}
