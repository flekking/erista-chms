import Form from '@erista/core/form'


import { Form as FormComponent, SubmitButton } from '@erista/components/atoms/form'
import { Input, Checkbox } from '@erista/components/molecules/form'
import { Link } from '@erista/components/atoms/link'

export default class Login extends Form {
  render() {
    return (
      <FormComponent>
        <Input
          label="Your email"
          type="email"
          placeholder="name@company.com"
        />
        <Input
          label="Your password"
          type="password"
          placeholder="••••••••"
        />
        <div className="flex items-center">
          <Checkbox label="Remember Me"/>
          <Link onClick={ e => this.onLostPassword(e) } className="ml-auto">Lost Password?</Link>
        </div>
        <SubmitButton className="w-full">Login</SubmitButton>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Not registered? <Link onClick={ e => this.onCreateAccount() }>Create Account</Link>
        </div>
      </FormComponent>
    )
  }

  onLostPassword(e) {
    if (typeof this.props.onLostPassword == 'function') {
      this.props.onLostPassword(e)
    }
  }

  onCreateAccount(e) {
    if (typeof this.props.onCreateAccount == 'function') {
      this.props.onCreateAccount(e)
    }
  }
}
