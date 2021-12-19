import Atom from '@erista/core/components/atom'

export class Card extends Atom {
  classes = [
    'bg-white',
    'dark:bg-gray-900',
    'shadow',
    'rounded-lg',
    'p-4',
    'relative',
    'row-span-full',
    'max-h-screen',
    'overflow-y-auto',
  ]
  render() {
    return (
      <div className={this._getCompiledClasses()}>
        {this.props.children}
      </div>
    )
  }
}
