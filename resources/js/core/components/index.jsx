import React, { Component as BaseComponent } from 'react'

export default class Component extends BaseComponent {
  /**
   * Classes functionalities.
   */
  classes = []
  classMethods = []

  _getCompiledClasses() {
    let classes = []
    classes.push(...this.classes)

    this.classMethods.forEach(methodName => {
      let newClasses = this[methodName]()
      if (newClasses != null) classes.push(...newClasses)
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

  /**
  * Props functionalities.
  */
  _defaultProps = []

  propSize() {
    return this.props.size || this._defaultProps.size || 'md'
  }

  propColor() {
    return this.props.color || this._defaultProps.color || 'primary'
  }

  onClick(e) {
    if (typeof this.props.onClick == 'function') {
      this.props.onClick(e)
    }
  }

  onSubmit(e) {
    if (typeof this.props.onSubmit == 'function') {
      this.props.onSubmit(e)
    }
  }
}
