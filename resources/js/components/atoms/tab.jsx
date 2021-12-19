import Atom from '@erista/core/components/atom'

export class TabButton extends Atom {
  classes = ['btn-tab']
  classMethods = ['getActive']

  render() {
    return (
      <button className={this._getCompiledClasses()} onClick={ e => this.onClick(e) } type="button">
        {this.props.children}
      </button>
    )
  }

  getActive() {
    return this.props.active ? ['btn-tab-active'] : null
  }
}
