import Layout from '@erista/core/layout'
import Authenticated from '@erista/middlewares/authenticated'

import Navbar from './navbar'

export default class Main extends Layout {
  render() {
    return (
      <Authenticated>
        <Navbar/>
        <div className="flex overflow-hidden bg-white dark:bg-gray-900">
          <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
          <div id="main-content" className="h-full w-full bg-gray-50 dark:bg-gray-800 relative overflow-y-auto md:ml-52">
            {this.propChildren()}
          </div>
        </div>
      </Authenticated>
    )
  }
}
