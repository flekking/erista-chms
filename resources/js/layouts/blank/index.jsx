import Layout from '@erista/core/layout'

export default class Blank extends Layout {
  render() {
    return this.renderAuth()
  }

  content() {
    return this.propChildren()
  }
}
