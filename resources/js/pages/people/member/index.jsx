import Page from '@erista/core/page'
import MainLayout from '@erista/layouts/main'
import {
  Routes,
  Route,
} from 'react-router-dom'

import Detail from './detail'
import NotFoundError from '@erista/pages/notFoundError'

export default class Member extends Page {
  render() {
    return (
      <MainLayout>
        <Routes>
          <Route index element={<Index/>}/>
          <Route path="detail" element={<Detail/>}/>
          <Route path="*" element={<NotFoundError/>}/>
        </Routes>
      </MainLayout>
    )
  }
}

import PageHeader from '@erista/components/molecules/pageHeader'
import EmptyState from '@erista/components/molecules/emptyState'
import { UserAddIcon } from '@heroicons/react/outline'

class Index extends Page {
  render() {
    return (
      <>
        <PageHeader
          title="Member List"
          pages={[
            { name: 'People', href: '#', current: false },
            { name: 'Member List', href: '#', current: true }
          ]}
        />
        <EmptyState
          title="Add new Member"
          body="There is no Member data yet."
          icon={UserAddIcon}
        />
      </>
      
    )
  }
}
