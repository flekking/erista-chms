import Molecule from '@erista/core/components/molecule'

import { TabButton } from '@erista/components/atoms/tab'
export class Tab extends Molecule {
  constructor(props) {
    super(props)
    this.state = {
      opened: props.defaultOpen || 0,
    }
  }

  render() {
    return (
      <>
        <div className="tab">
          <div className="tab-body">
            <ul className="tab-items">
              {
                this.propTabs().map((tab, i) => {
                  return (
                    <li className="tab-item" key={i}>
                      <TabButton
                        active={this.tabIsOpened(i)}
                        onClick={e => this.openTab(i) }
                      >
                        {tab.title}
                      </TabButton>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        {
          this.propTabs().map((tab, i) => {
            if (this.state.opened == i) {
              return (
                <div className="p-4 pt-0" key={i}>
                  {tab.element}
                </div>
              )
            }
          })
        }
      </>
    )
  }

  propTabs() {
    return this.props.tabs || []
  }

  openTab(i) {
    this.setState(state => ({ opened: i }))
  }

  tabIsOpened(i) {
    return i == this.state.opened
  }
}