import Page from '@erista/core/page'
import MainLayout from '@erista/layouts/main'

import PageHeader from '@erista/components/molecules/pageHeader'

export default class Dashboard extends Page {
  render() {
    return (
      <MainLayout>
        <PageHeader title="Dashboard" pages={[{ name: 'Dashboard', href: '#', current: true }]}/>
      </MainLayout>
    )
  }
}
