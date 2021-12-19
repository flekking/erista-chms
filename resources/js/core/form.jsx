import React, { Component } from 'react'
import axios from 'axios'
import hash from 'object-hash'

export default class Form extends Component {
  subForms = {}

  constructor(props) {
    super(props)
    this.state = {
      form: {
        data: this._formData(),
        errors: this._formErrors(),
        loading: false,
      },
      successfullySubmittedOnce: false,
      meta: this._meta(),
      hash: 'initial',
    }
  }

  _formData() {
    return {}
  }

  _formErrors() {
    return {}
  }

  _meta() {
    return {}
  }

  _config() {
    return {}
  }

  _handleFormDataChange(e, index) {
    this.setState(state => {
      let data = state.form.data
      data[index] = e.target.value

      return {
        ...state,
        form: {
          ...state.form,
          data: data,
        }
      }
    })
  }

  _handleSubFormChange(subForm) {
    this.setState(state => {
      let form = state.form

      let data = {
        ...form.data,
        ...subForm.data,
      }
      let errors = {
        ...form.errors,
        ...subForm.errors,
      }

      return {
        ...state,
        form: {
          ...state.form,
          data,
          errors
        }
      }
    })
  }

  _setErrors(err) {
    this.setState(state => {
      return {
        ...state,
        form: {
          ...state.form,
          errors: err,
        }
      }
    })
  }

  _resetErrors() {
    this._setErrors(this._formErrors())
  }

  _setLoading(loading) {
    this.setState(state => {
      return {
        ...state,
        form: {
          ...state.form,
          loading: loading,
        }
      }
    })
  }

  _toggleLoading() {
    this._setLoading(!this.state.form.loading)
  }

  _hasErrors(index) {
    return this.state.form.errors[index].length > 0
  }

  _setMeta(meta) {
    this.setState(state => ({
      ...state,
      meta
    }))
  }

  _hash(index) {
    return this.state.hash + '-' + index
  }

  _submit(e) {
    if (e.preventDefault) e.preventDefault()
    this._setLoading(true)
    this._beforeSubmit()
      .then(hookReturn => {
        this['_submit' + lodash.upperFirst(this._config()['method'])](hookReturn)
      })
      .catch(hookReturn => {
        this._setLoading(false)
      })
      .finally(hookReturn => {
        
      })
  }

  _submitPost(hookReturn) {
    let config = this._config()
    this._resetErrors()
    axios({
      method: 'post',
      url: config.url,
      data: this.state.form.data
    })
      .then(res => {
        this._afterSuccessfulSubmit(hookReturn)
        this.__successfullySubmittedOnce()
      })
      .catch(err => {
        console.log(err)
        if (err.response.status == 422) {
          this.__handleValidationError(err.response.data)
        }
        this._afterFailedSubmit(hookReturn)
      })
      .finally(() => {
        this.__refreshHash()
        this._setLoading(false)
        this._afterSubmit(hookReturn)
      })
  }

  _beforeSubmit() {
    return new Promise((resolve, reject) => {
      resolve({})
    })
  }

  _afterSuccessfulSubmit() {
    if (typeof this.props.onSuccess == 'function') this.props.onSuccess()
  }

  _afterFailedSubmit() {
    if (typeof this.props.onFailed == 'function') this.props.onFailed()
  }

  _afterSubmit() {
    if (typeof this.props.whenDone == 'function') this.props.whenDone()
  }

  __handleValidationError(err) {
    this._setErrors(err.errors)
  }

  __successfullySubmittedOnce() {
    this.setState(state => ({
      ...state,
      successfullySubmittedOnce: true,
    }))
  }

  __refreshHash() {
    this.setState(state => ({
      ...state,
      hash: hash(this.state.form)
    }))
  }

  _resetForm() {
    this.setState(state => {
      return {
        form: {
          data: this._formData(),
          errors: this._formErrors(),
          loading: false,
        },
        successfullySubmittedOnce: false,
        meta: this._meta(),
        hash: 'initial',
      }
    })
  }

  _passSubForm(index) {
    let form = this.state.form

    let indexes = this.subForms[index]
    let data = {}
    let errors = {}
    indexes.forEach(i => {
      data[i] = form.data[i]
      errors[i] = form.errors[i]
    })
    
    return {
      data,
      errors,
    }
  }

  _subFormHasErrors(index) {
    let indexes = this.subForms[index]
    let error = false
    indexes.forEach(i => {
      if (error) {
        return
      }
      error = this._hasErrors(i)
    })

    return error
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback)=>{
      return;
    };
  }
}

export class SubForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: props.form(),
    }
  }

  _handleFormDataChange(e, index) {
    this.setState(state => {
      let data = state.form.data
      data[index] = e.target.value

      if (typeof this.props.onChange == 'function') {
        this.props.onChange(this.state.form)
      }

      return {
        ...state,
        form: {
          ...state.form,
          data: data,
        }
      }
    })
  }

  _setErrors(err) {
    this.setState(state => {
      return {
        ...state,
        form: {
          ...state.form,
          errors: err,
        }
      }
    })
  }

  _resetErrors() {
    this._setErrors(this._formErrors())
  }

  _hasErrors(index) {
    return this.state.form.errors[index].length > 0
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback)=>{
      return;
    };
  }
}
