import Component from './index'

export default class Atom extends Component {
  compileClasses() {
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

  _getDefaultOfMappedClasses(classesMap, index) {
    let classes = classesMap[index]
    classes = classes == undefined ? classesMap['_default'] : classes
    classes = classes == undefined ? '' : classes

    return classes == '' ? [] : [classes]
  }
}
