import Layout from '@erista/core/layout'
import Unauthenticated from '@erista/middlewares/unauthenticated'

export default class Auth extends Layout {
  render() {
    return (
      <Unauthenticated>
        <div className="mx-auto md:h-screen flex flex-col justify-center items-center pt:mt-0 bg-gradient-erista">
          <img
            className="hidden md:absolute md:top-4 md:left-8 md:block md:w-40 md:h-14 z-10 object-cover object-center"
            src="/img/static/erista-logo-landscape.png" alt="Erista Logo"
          />
          <img
            className="hidden lg:absolute lg:my-auto lg:left-0 lg:block lg:w-7/12"
            src="/img/static/people-brainstorm.svg" alt="Filler Image"
          />
          <div
            className="mx-auto bg-white dark:bg-gray-800 p-6 md:bg-transparent lg:grid lg:grid-cols-2 items-center justify-center md:mt-0 w-full lg:max-w-screen-xl lg:relative 2xl:max:max-w-screen-xl xl:p-0"
          >
            <div className="hidden lg:block lg:w-full w-2/3"></div>
            <div
              className="bg-white dark:bg-gray-900 shadow rounded-lg w-full md:max-w-md p-6 pb-12 sm:p-8 md:mx-auto lg:px-12 lg:pt-6 lg:pb-16 md:pt-4 md:pb-16 space-y-8 z-0"
            >
              {this.propChildren()}
            </div>
          </div>
        </div>
      </Unauthenticated>
    )
  }
}
