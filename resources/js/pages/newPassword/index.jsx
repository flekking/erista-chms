import Page from '@erista/core/page'
import AuthLayout from '@erista/layouts/auth'

import { Heading } from '@erista/components/atoms/typography'
import { Link } from '@erista/components/atoms/link'
import NewPasswordForm from '@erista/forms/newPassword'

export default class NewPassword extends Page {
  render() {
    return (
      <AuthLayout>
        <div className="text-right">
          <Link href="#">Back</Link>
        </div>
        <Heading level="5">Set your password</Heading>
        <NewPasswordForm/>
      </AuthLayout>
    )
  }
}
