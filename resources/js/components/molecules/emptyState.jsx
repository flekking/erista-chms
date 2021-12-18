import Molecule from '@erista/core/components/molecule'
import { Heading, Paragraph } from '@erista/components/atoms/typography'

export default class EmptyState extends Molecule {
  render() {
    let Icon = this.props.icon
    return (
      <div className="py-4">
        <Icon className='w-12 h-12 text-gray-400 mx-auto'/>
        <div className="text-center pb-4">
          <Heading className="mt-2" level="6">{this.props.title}</Heading>
          <Paragraph className="mt-1 text-gray-500">
            {this.props.body}
          </Paragraph>
        </div>
      </div>
    )
  }
}
