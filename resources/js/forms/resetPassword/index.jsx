import Form from '@erista/core/form'

import { Form as FormComponent, SubmitButton } from '@erista/components/atoms/form'
import { Input } from '@erista/components/molecules/form'

export default class ResetPassword extends Form {
  render() {
    return (
      <FormComponent>
        <Input
          label="Your email"
          type="email"
          placeholder="name@company.com"
        />
        <SubmitButton className="w-full">Reset Password</SubmitButton>
      </FormComponent>
    )
  }
}