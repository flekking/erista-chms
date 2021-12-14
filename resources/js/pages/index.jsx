import BasePage from '@erista/core/page'
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate
} from 'react-router-dom'

import Dashboard from './dashboard'
import Login from './login'
import ResetPassword from './resetPassword'
import NewPassword from './newPassword'
import NotFoundError from './notFoundError'

export default class Page extends BasePage {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/web" element={<Outlet/>}>
            <Route index element={<Navigate replace to="dashboard"/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="reset_password" element={<ResetPassword/>}/>
            <Route path="new_password" element={<NewPassword/>}/>
            <Route path="*" element={<NotFoundError/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
