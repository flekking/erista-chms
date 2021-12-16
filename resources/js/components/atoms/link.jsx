import Atom from '@erista/core/components/atom'

/**
 * Define the base <a/> component.
 */
export class Link extends Atom {
  classes = ['text-sm']
  classMethods = ['getColor']

  render() {
    return (
      <a
        className={this._getCompiledClasses()}
        href={this.props.href}
        onClick={ e => this.onClick(e) }
      >
        {this.props.children}
      </a>
    )
  }

  getColor() {
    const classesMap = {
      'primary': 'text-primary-600 dark:text-primary-400',
      'secondary': 'text-secondary-900 dark:text-secondary-100',
      'success': 'text-success-600 dark:text-success-400',
      'danger': 'text-danger-600 dark:text-danger-400',
      'warning': 'text-warning-600 dark:text-warning-400',
      'info': 'text-info-600 dark:text-info-400',
      'light': 'text-light-900 dark:text-light-100',
      'dark': 'text-dark-900 dark:text-dark-400',
    }
    return this._getDefaultOfMappedClasses(classesMap, this.propColor())
  }
}

/**
 * Define the router link.
 */
import { Link as ReactRouterLink } from 'react-router-dom'

export class RouterLink extends Link {
  render() {
    return (
      <ReactRouterLink
        className={this._getCompiledClasses()}
        to={this.props.to}
      >
        {this.props.children}
      </ReactRouterLink>
    )
  }
}
