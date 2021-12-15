import Atom from '@erista/core/components/atom'

/**
 * Define the <h1/> up to <h6/> component. We make it flexible for additional
 * styling, but strictly atomized.
 */
export class Heading extends Atom {
  classes = []
  classMethods = []

  render() {
    let Element = 'h' + this.propLevel()
    return (
      <Element
        className={this._getCompiledClasses()}
      >
        {this.props.children}
      </Element>
    )
  }

  propLevel() {
    return this.props.level || '1'
  }
}

/**
 * Define the <p/> element.
 */
export class Paragraph extends Atom {
  classes = []
  classMethods = []
  
  render() {
    return (
      <p
        className={this._getCompiledClasses()}
      >
        {this.props.children}
      </p>
    )
  }
}
