import BasePage from '@erista/core/page'
import MainLayout from '@erista/layouts/main'

export default class Dashboard extends BasePage {
  render() {
    return (
      <MainLayout>
        <div>dashboard</div>
      </MainLayout>
    )
  }
}
