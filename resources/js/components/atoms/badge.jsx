import Atom from '@erista/core/components/atom'

export class RedDotBadge extends Atom {
  classes = ['w-2 h-2 rounded-full']
  classMethods = [
    'getPosition',
    'getShow',
  ]

  render() {
    return (<span className={this._getCompiledClasses()}></span>)
  }

  getPosition() {
    const classesMap = {
      'inline-block': 'inline-block',
      'absolute': 'absolute',
    }
    return this._getDefaultOfMappedClasses(classesMap, this.propPosition())
  }

  getShow() {
    return this.props.show ? ['bg-red-400'] : ['bg-transparent']
  }

  propPosition() {
    return this.props.position || 'absolute'
  }
}
