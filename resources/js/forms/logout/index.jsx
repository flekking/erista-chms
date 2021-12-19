import Form from '@erista/core/form'

export default class Logout extends Form {
  render() {
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

  componentDidMount() {
    this._submit({})
  }
}