import Component from './index'

export default class Atom extends Component {
  _getCompiledClasses() {
    let classes = this.classes

    this.classMethods.forEach(methodName => {
      classes.push(...this[methodName]())
    })

    if (typeof this.props.className == 'string') {
      classes = classes.join(' ') + ' ' + this.props.className
    } else if (Array.isArray(this.props.className)) {
      classes = classes.push(...this.props.className)
      classes = classes.join(' ')
    } else {
      classes = classes.join(' ')
    }

    return classes
  }

  _getDefaultOfMap(map, index) {
    let item = map[index]
    item = item == undefined ? map['_default'] : item
    item = item == undefined ? '' : item

    return item
  }

  _getDefaultOfMappedClasses(classesMap, index) {
    let classes = this._getDefaultOfMap(classesMap, index)

    return classes == '' ? [] : [classes]
  }
}
