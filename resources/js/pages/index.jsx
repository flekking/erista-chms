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
import Logout from './logout'
import ResetPassword from './resetPassword'
import NewPassword from './newPassword'
import People from './people'
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
            <Route path="logout" element={<Logout/>}/>
            <Route path="reset_password" element={<ResetPassword/>}/>
            <Route path="new_password" element={<NewPassword/>}/>
            <Route path="people/*" element={<People/>}/>
            <Route path="*" element={<NotFoundError/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
