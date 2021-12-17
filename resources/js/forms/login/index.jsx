import Form from '@erista/core/form'

import { Form as FormComponent, SubmitButton } from '@erista/components/atoms/form'
import { Input, Checkbox } from '@erista/components/molecules/form'
import { Link } from '@erista/components/atoms/link'

export default class Login extends Form {
  render() {
    return (
      <FormComponent onSubmit={ e => this._submit(e) }>
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
        <SubmitButton className="w-full" loading={this.state.form.loading}>Login</SubmitButton>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Not registered? <Link onClick={ e => this.onCreateAccount() }>Create Account</Link>
        </div>
      </FormComponent>
    )
  }

  _config() {
    return {
      url: '/ajax/log/authentication_log',
      method: 'post',
    }
  }
  _formData() {
    return {
      email: '',
      password: '',
    }
  }
  _formErrors() {
    return {
      email: '',
      password: '',
    }
  }

  _beforeSubmit() {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: '/ajax/utils/csrf_cookie',
      })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
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
