import Form from '@erista/core/form'

import { Form as FormComponent, SubmitButton } from '@erista/components/atoms/form'
import { Input } from '@erista/components/molecules/form'

export default class NewPassword extends Form {
  render() {
    return (
      <FormComponent>
        <Input
          label="Your new password"
          type="password"
          placeholder="••••••••"
        />
        <Input
          label="Confirm your new password"
          type="password"
          placeholder="••••••••"
        />
        <SubmitButton className="w-full">Reset Password</SubmitButton>
      </FormComponent>
    )
  }
}