import BasePage from '@erista/core/page'
import Unauthenticated from '@erista/middlewares/unauthenticated'

export default class Dashboard extends BasePage {
  render() {
    return (
      <Unauthenticated>
        <div>login</div>
      </Unauthenticated>
    )
  }
}
