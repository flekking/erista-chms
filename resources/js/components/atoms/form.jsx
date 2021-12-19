import Atom from '@erista/core/components/atom'

/**
 * Define the <form/> element.
 */
export class Form extends Atom {
  classes = ['space-y-4']

  render() {
    return (
      <form className={this._getCompiledClasses()} onSubmit={ e => this.onSubmit(e) }>
        {this.props.children}
      </form>
    )
  }
}

/**
 * Define the subform element.
 */
export class SubForm extends Atom {
  classes = ['space-y-4']

  render() {
    return (
      <div className={this._getCompiledClasses()}>
        {this.props.children}
      </div>
    )
  }
}

/**
 * Define the <input/> element, limited to every input types, except for the
 * "checkbox" and "radio"
 */
export class Input extends Atom {
  classes = ['form-control']
  classMethods = [
    'getSize',
    'getError',
  ]

  constructor(props) {
    super(props)
    let value = props.value
    value = value == undefined ? '' : value
    this.state = {
      value
    }
  }

  render() {
    return (
      <input
        className={this._getCompiledClasses()}
        type={this.propType()}
        placeholder={this.props.placeholder}
        value={this.state.value}
        onChange={ e => this.onChange(e) }
      />
    )
  }

  getSize() {
    const classesMap = {
      'sm': 'form-control-sm',
      'md': 'form-control-md',
      'lg': 'form-control-lg',
    }
    return this._getDefaultOfMappedClasses(classesMap, this.propSize())
  }

  getError() {
    return this.props.hasError ? ['form-control-error'] : ''
  }

  propType() {
    return this.props.type || 'text'
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    })

    if (typeof this.props.onChange == 'function') {
      this.props.onChange(e)
    }
  }
}

/**
 * Define the <input/> element with "checkbox" type.
 */
export class Checkbox extends Atom {
  classes = ['form-control']
  render() {
    return (
      <input className={this._getCompiledClasses()} type="checkbox"/>
    )
  }
}

/**
 * Define the <label/> component as a label for form input.
 */
export class InputLabel extends Atom {
  classes = ['form-label']
  render() {
    return (
      <label className={this._getCompiledClasses()}>
        {this.props.children}
      </label>
    )
  }
}

/**
 * Define the <label/> component as a description for a checkbox.
 */
export class CheckboxLabel extends Atom {
  classes = ['form-control-checkbox-label', 'ml-3']
  render() {
    return (
      <label className={this._getCompiledClasses()}>
        {this.props.children}
      </label>
    )
  }
}

/**
 * Define the custom component to show feedback error on component.
 */
export class Errors extends Atom {
  classes = ['form-error']
  render() {
    return (
      <small className={this._getCompiledClasses()}>{this.error()}</small>
    )
  }

  error() {
    let error = this.props.errors
    error = Array.isArray(error) ? error : []
    error = error.length > 0 ? error[0] : ''
    return error
  }
}

/**
 * Define the <button/> element, limited to "submit" type only.
 */
import { Button } from '@erista/components/atoms/button'

export class SubmitButton extends Atom {
  render() {
    return (
      <Button
        className={this._getCompiledClasses()}
        loading={this.props.loading}
        color={this.props.color}
        type="submit"
        onClick={ e => this.onClick(e) }
      >
        {this.props.children}
      </Button>
    )
  }
}
