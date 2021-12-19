import Molecule from '@erista/core/components/molecule'
import { Heading } from '@erista/components/atoms/typography'
import { ChevronLeftIcon } from '@heroicons/react/solid'
import { Breadcrumb } from '@erista/components/atoms/breadcrumb'
import { Button, RouterButton } from '@erista/components/atoms/button'
import { Fragment } from 'react'

export default class PageHeader extends Molecule {
  render() {
    return (
      <div className="p-4">
        <div>
          <nav className="sm:hidden" aria-label="Back">
            <a href="#" className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 dark:hover:text-gray-200">
              <ChevronLeftIcon className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
              Back
            </a>
          </nav>
          <Breadcrumb pages={this.props.pages}/>
        </div>
        <div className="mt-2 md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <Heading level="4">{this.props.title}</Heading>
          </div>
          <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
            {this.propButtons().map((button, i) => {
              return (
                <Fragment key={i}>
                  {
                    button.type == 'button' && (
                      <Button
                        className="inline-flex items-center"
                      >
                        {button.title}
                      </Button>
                    )
                  }
                  {
                    button.type == 'routerButton' && (
                      <RouterButton
                        className="inline-flex items-center"
                        to={button.meta.to}
                      >
                        {button.title}
                      </RouterButton>
                    )
                  }
                </Fragment>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  propButtons() {
    return this.props.buttons || []
  }
}