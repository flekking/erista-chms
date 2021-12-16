import Layout from '@erista/core/layout'
import Authenticated from '@erista/middlewares/authenticated'

export default class Main extends Layout {
  render() {
    return (
      <Authenticated>
        {this.propChildren()}
      </Authenticated>
    )
  }
}
