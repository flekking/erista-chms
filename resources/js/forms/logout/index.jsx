import Form from '@erista/core/form'

export default class Logout extends Form {
  render() {
    this._submit({})
    return (
      <></>
    )
  }

  _config() {
    return {
      url: '/ajax/log/authentication_log/logout',
      method: 'post',
    }
  }
}