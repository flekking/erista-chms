import Page from '@erista/core/page'

import MainLayout from '@erista/layouts/main'
import PageHeader from '@erista/components/molecules/pageHeader'

export default class Detail extends Page {
  render() {
    return (
      <MainLayout>
        <PageHeader
          title="Member Detail"
          pages={[
            { name: 'People', href: '#', current: false },
            { name: 'Member List', href: '#', current: true },
            { name: 'Homer Simpson', href: '#', current: true },
          ]}
        />
      </MainLayout>
    )
  }
}