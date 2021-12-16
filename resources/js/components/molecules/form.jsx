import Molecule from '@erista/core/components/molecule'

/**
 * Define the input bundle with label and errors.
 */
import { InputLabel, Input as InputAtom, Errors } from '@erista/components/atoms/form'
export class Input extends Molecule {
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
      <div>
        <InputLabel>{this.props.label}</InputLabel>
        <InputAtom
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.state.value}
          hasError={this.hasError()}
          onChange={ e => this.onChange(e) }
        />
        <Errors
          errors={this.propErrors()}
        />
      </div>
    )
  }

  propErrors() {
    return Array.isArray(this.props.errors) ? this.props.errors : []
  }

  hasError() {
    return this.propErrors().length > 0
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
 * Define the checkbox element bundle with label
 */
import { Checkbox as CheckboxAtom, CheckboxLabel } from '@erista/components/atoms/form'

export class Checkbox extends Molecule {
  render() {
    return (
      <div className="flex items-center h-4">
        <CheckboxAtom/>
        <CheckboxLabel>{this.propLabel()}</CheckboxLabel>
      </div>
    )
  }

  propLabel() {
    return this.props.label || ''
  }
}
