import BasePage from '@erista/core/page'
import Authenticated from '@erista/middlewares/authenticated'

export default class Dashboard extends BasePage {
  render() {
    return (
      <Authenticated>
        <div>dashboard</div>
      </Authenticated>
    )
  }
}
