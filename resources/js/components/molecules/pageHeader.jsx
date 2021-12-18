/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon } from '@heroicons/react/solid'
import { Breadcrumb } from '@erista/components/atoms/breadcrumb'

export default function PageHeader(props) {
  return (
    <div className="p-4">
      <div>
        <nav className="sm:hidden" aria-label="Back">
          <a href="#" className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-200">
            <ChevronLeftIcon className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            Back
          </a>
        </nav>
        <Breadcrumb pages={props.pages}/>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-100 sm:text-3xl sm:truncate">{props.title}</h2>
        </div>
        <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
          <button
            type="button"
            className={props.buttons===undefined ? "hidden" : 
              "inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            }
            onClick={props.buttons ? props.buttons[1].onClick : undefined}
          >
            {props.buttons ? props.buttons[1].name : undefined}
          </button>
          <button
            type="button"
            className={props.buttons===undefined ? "hidden" : 
              "ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            }
            onClick={props.buttons ? props.buttons[0].onClick : undefined}
          >
            {props.buttons ? props.buttons[0].name : undefined}
          </button>
        </div>
      </div>
    </div>
  )
}