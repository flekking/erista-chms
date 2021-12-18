import Page from '@erista/core/page'
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Member from './member'
import NotFoundError from '@erista/pages/notFoundError'

export default class People extends Page {
  render() {
    return (
      <Routes>
        <Route index element={<Navigate replace to="member"/>}/>
        <Route path="member/*" element={<Member/>}/>
        <Route path="*" element={<NotFoundError/>}/>
      </Routes>
    )
  }
}
