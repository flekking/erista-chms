import Layout from '@erista/core/layout'
import Unauthenticated from '@erista/middlewares/unauthenticated'

export default class Auth extends Layout {
  render() {
    return (
      <Unauthenticated>
        {this.propChildren()}
      </Unauthenticated>
    )
  }
}
