import Atom from '@erista/core/components/atom'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid'

export class Breadcrumb extends Atom {
  render() {
    return (
      <nav className="flex" aria-label="Breadcrumb">
        <ol role="list" className="hidden sm:flex items-center space-x-4">
          <li>
            <div>
              <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Home</span>
              </a>
            </div>
          </li>
          {this.props.pages.map((page) => (
            <li key={page.name}>
              <div className="flex items-center">
                <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                <a
                  href={page.href}
                  className="ml-4 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                  aria-current={page.current ? 'page' : undefined}
                >
                  {page.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    )
  }
}