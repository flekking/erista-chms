import Page from '@erista/core/page'

import MainLayout from '@erista/layouts/main'
import PageHeader from '@erista/components/molecules/pageHeader'
import { Card } from '@erista/components/atoms/card'
import { Tab } from '@erista/components/molecules/tab'

export default class Detail extends Page {
  render() {
    return (
      <MainLayout>
        <PageHeader
          title="Add Member"
          pages={[
            { name: 'People', href: '#', current: false },
            { name: 'Member', href: '#', current: false },
            { name: 'Add Member', href: '#', current: true },
          ]}
        />
        
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
          <div className="grid grid-cols-1 px-4 gap-4">
            <div className="col-span-1">
              <Card className="mb-5">
                <Tab
                  tabs={[
                    { title: 'General Info', element: 'meh' },
                    { title: 'Family Info', element: 'bleh' },
                    { title: 'Small Group', element: 'dawg' },
                  ]}
                />
              </Card>
            </div>
          </div>
        </main>
      </MainLayout>
    )
  }
}