import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        data: this._formData(),
        errors: this._formErrors(),
        loading: false,
      },
    }
  }

  _formData() {
    return {}
  }

  _formErrors() {
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

  _submit(e) {
    e.preventDefault()
    this._beforeSubmit()
      .then(hookReturn => {
        this['_submit' + lodash.upperFirst(this._config()['method'])](hookReturn)
      })
      .catch(hookReturn => {

      })
  }

  _submitPost(hookReturn) {
    let config = this._config()
    this._setLoading(true)
    this._resetErrors()
    axios({
      method: 'post',
      url: config.url,
      data: this.state.form.data
    })
      .then(res => {
        console.log(res)
        this._afterSuccessfulSubmit(hookReturn)
      })
      .catch(err => {
        console.log(err)
        if (err.response.status == 422) {
          this.__handleValidationError(err.response.data)
        }
        this._afterFailedSubmit(hookReturn)
      })
      .finally(() => {
        this._setLoading(false)
        this._afterSubmit(hookReturn)
      })
  }

  _beforeSubmit() {
    return new Promise((resolve, reject) => {
      resolve({})
    })
  }

  _afterSuccesfulSubmit() {
    return new Promise((resolve, reject) => {
      resolve({})
    })
  }

  _afterFailedSubmit() {
    return new Promise((resolve, reject) => {
      resolve({})
    })
  }

  _afterSubmit() {
    return new Promise((resolve, reject) => {
      resolve({})
    })
  }

  __handleValidationError(err) {
    this._setErrors(err.errors)
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
      return;
    };
  }
}
