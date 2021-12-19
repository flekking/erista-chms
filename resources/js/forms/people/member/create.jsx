import Form, { SubForm } from '@erista/core/form'

import {
  Form as FormComponent,
  SubForm as SubFormComponent,
  SubmitButton
} from '@erista/components/atoms/form'
import { Input } from '@erista/components/molecules/form'
import { Tab } from '@erista/components/molecules/tab'

class Create extends Form {
  subForms = {
    generalInfo: ['full_name', 'birthdate', 'birthplace']
  }

  render() {
    return (
      <FormComponent onSubmit={ e => this._submit(e) }>
        <Tab
          form={this.state.form}
          tabs={[
            {
              title: 'General Info',
              element: 
                <GeneralInfo
                  key={this._hash('general-info')}
                  form={() => this._passSubForm('generalInfo')}
                  onChange={ (subForm) => this._handleSubFormChange(subForm) }
                />
              ,
              hasErrors: this._subFormHasErrors('generalInfo')
            },
            { title: 'Family Info', element: 'bleh' },
            { title: 'Small Group', element: 'dawg' },
          ]}
        />
        <div className="col-span-6 sm:col-full flex items-center justify-end space-x-2 p-4">
          <SubmitButton onClick={ e => this.setAfterSubmitMeta('reiterate') } loading={this.isLoading('reiterate')}>Save & Add another</SubmitButton>
          <SubmitButton color="light" onClick={ e => this.setAfterSubmitMeta('close') } loading={this.isLoading('close')}>Save & Close</SubmitButton>
        </div>
      </FormComponent>
    )
  }

  setAfterSubmitMeta(method) {
    this._setMeta({
      ...this.state.meta,
      afterSubmitMethod: method
    })
  }

  isLoading(method) {
    return this.state.form.loading && this.state.meta.afterSubmitMethod == method
  }

  _config() {
    return {
      url: '/ajax/people/member',
      method: 'post',
    }
  }
  _formData() {
    return {
      'full_name': '',
      'birthplace': '',
      'birthdate': '',
    }
  }
  _formErrors() {
    return {
      'full_name': [],
      'birthplace': [],
      'birthdate': [],
    }
  }

  _afterSuccessfulSubmit() {
    switch (this.state.meta.afterSubmitMethod) {
      case 'reiterate' :
        this._resetForm()
        break
      case 'close' :
        this.props.navigation('/web/people/member')
        break
    }
  }
}

class GeneralInfo extends SubForm {
  render() {
    return (
      <SubFormComponent>
        <Input
          label="Full name"
          placeholder="Shanty Maria"
          value={this.state.form.data['full_name']}
          onChange={ e => this._handleFormDataChange(e, 'full_name') }
          errors={this.state.form.errors['full_name']}
        />
        <Input
          label="Birthplace"
          placeholder="New Austin"
          value={this.state.form.data['birthplace']}
          onChange={ e => this._handleFormDataChange(e, 'birthplace') }
          errors={this.state.form.errors['birthplace']}
        />
        <Input
          label="Birthdate"
          type="date"
          value={this.state.form.data['birthdate']}
          onChange={ e => this._handleFormDataChange(e, 'birthdate') }
          errors={this.state.form.errors['birthdate']}
        />
      </SubFormComponent>
    )
  }
}

import { useNavigate } from 'react-router-dom'
export default function (props) {
  let navigation = useNavigate()
  return <Create {...props} navigation={navigation}/>
}
