import BasePage from '@erista/core/page'
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate
} from 'react-router-dom'

import Login from './login'
import Dashboard from './dashboard'
import NotFoundError from './notFoundError'

export default class Page extends BasePage {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/web" element={<Outlet/>}>
            <Route index element={<Navigate replace to="dashboard"/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="*" element={<NotFoundError/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
