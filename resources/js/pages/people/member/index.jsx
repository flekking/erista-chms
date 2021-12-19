import Page from '@erista/core/page'
import {
  Routes,
  Route,
} from 'react-router-dom'
import { Fragment } from 'react'

import Create from './create'
import Detail from './detail'
import NotFoundError from '@erista/pages/notFoundError'

export default class Member extends Page {
  render() {
    return (
      <>
        <Routes>
          <Route index element={<Index/>}/>
          <Route path="create" element={<Create/>}/>
          <Route path="detail" element={<Detail/>}/>
          <Route path="*" element={<NotFoundError/>}/>
        </Routes>
      </>
    )
  }
}

import MainLayout from '@erista/layouts/main'
import PageHeader from '@erista/components/molecules/pageHeader'
import EmptyState from '@erista/components/molecules/emptyState'
import { UserAddIcon } from '@heroicons/react/outline'

class Index extends Page {
  render() {
    return (
      <MainLayout>
        <PageHeader
          title="Member List"
          pages={[
            { name: 'People', href: '#', current: false },
            { name: 'Member', href: '#', current: false },
            { name: 'Member List', href: '#', current: true }
          ]}
          buttons={[
            { title: 'Add Member', type: 'routerButton', meta: { to: '/web/people/member/create' } }
          ]}
        />
        <EmptyState
          title="Add new Member"
          body="There is no Member data yet."
          icon={UserAddIcon}
        />
      </MainLayout>
      
    )
  }
}
