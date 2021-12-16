import Atom from '@erista/core/components/atom'

/**
 * Define the generic <button/> component.
 */
import { CircleSpinner } from './loader'
export class Button extends Atom {
  classes = ['btn']
  classMethods = [
    'getSize',
    'getColor',
    'getDisabled',
  ]

  render() {
    return (
      <button
        className={this._getCompiledClasses()}
        type={this.propType()}
        disabled={this.propDisabled()}
        onClick={ e => this.onClick(e) }
      >
        {this.renderLoading()}
        {this.props.children}
      </button>
    )
  }

  renderLoading() {
    if (this.props.loading) {
      const colorToFillMap = {
        'primary': 'light',
        'secondary': 'light',
        'success': 'light',
        'danger': 'light',
        'warning': 'light',
        'info': 'light',
        'light': 'dark',
        'dark': 'light',
        '_default': 'light',
      }

      return <CircleSpinner className="mr-2" size="sm" fill={this._getDefaultOfMap(colorToFillMap, this.props.color)}/>
    }
  }

  getSize() {
    const classesMap = {
      'sm': 'btn-sm',
      'md': 'btn-md',
      'lg': 'btn-lg',
    }
    return this._getDefaultOfMappedClasses(classesMap, this.propSize())
  }

  getColor() {
    const classesMap = {
      'primary': 'btn-primary',
      'secondary': 'btn-secondary',
      'success': 'btn-success',
      'danger': 'btn-danger',
      'warning': 'btn-warning',
      'info': 'btn-info',
      'light': 'btn-light',
      'dark': 'btn-dark',
    }
    return this._getDefaultOfMappedClasses(classesMap, this.propColor())
  }

  getDisabled() {
    let classes = this.props.loading
      ? 'disabled'
      : (this.props.disabled ? 'disabled' : '')

    return [classes]
  }

  propType() {
    return this.props.type || 'button'
  }

  propDisabled() {
    return this.props.loading
      ? true
      : (this.props.disabled ? true : false)
  }
}

/**
 * Here we define the button that would act as a link.
 */
export class LinkButton extends Button {
  render() {
    return (
      <a
        className={this._getCompiledClasses()}
        href={this.props.href}
      >
        {this.props.children}
      </a>
    )
  }
}

/**
 * Here we define the <Link/> from react-router-dom, but specifically in
 * <Button/> style.
 */
import { Link } from 'react-router-dom'

export class RouterButton extends Button {
  render() {
    return (
      <Link
        className={this._getCompiledClasses()}
        to={this.props.to}
      >
        {this.props.children}
      </Link>
    )
  }
}
