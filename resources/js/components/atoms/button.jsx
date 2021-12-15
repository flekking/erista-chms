import Atom from '@erista/core/components/atom'
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
      <button className={this._getCompiledClasses()} disabled={this.propDisabled()}>
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
    return this._getDefaultOfMappedClasses(classesMap, this.props.size)
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
    return this._getDefaultOfMappedClasses(classesMap, this.props.color)
  }

  getDisabled() {
    let classes = this.props.loading
      ? 'disabled'
      : (this.props.disabled ? 'disabled' : '')

    return [classes]
  }

  propDisabled() {
    return this.props.loading
      ? true
      : (this.props.disabled ? true : false)
  }
}
