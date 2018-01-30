import React, { PureComponent, Fragment } from 'react'
import { Button, Popover } from '@blueprintjs/core'
import TextField from './../components/TextField'
import { login } from './../data/users'

class Login extends PureComponent {
	constructor(props) {
    super(props)
    
    this.state = {
      input: {
        usename: '',
        password: ''
      },
      notif: []
    }
  }
  
  componentWillUpdate(nextProps, nextState) {
    if (nextState.notif) {
      console.log(nextState)
    }
    console.log(false)
  }

  handleInputChange(field, e) {
    const state = { ... this.state }
    const { input } = state

    input[field] = e.target.value

    this.setState({ input })
  }

  handleLogin(e) {
    const { login } = this.props
    const { input } = this.state

    login(input.username, input.password).then(resolve => {
      
    }).catch(error => {
      this.setState({
        notif: error.message
      })
    })
  }

  toastRef(ref) {
    this.toast = ref
  }

	render() {
    const p_loginContainer = {
      className: 'login-container'
    }

    const p_login = {
      className: 'login'
    }

    const p_username = {
      icon: 'pt-icon-user',
      className: 'login-input',
      onChange: this.handleInputChange.bind(this, 'username')
    }

    const p_password = {
      icon: 'pt-icon-key',
      className: 'login-input',
      type: 'password',
      onChange: this.handleInputChange.bind(this, 'password')
    }

    const p_btn = {
      className: 'pt-fill pt-intent-primary',
      onClick: this.handleLogin.bind(this),
      text: 'Login'
    }

    const p_tooltip = {
      className: 'pt-popover',
      content: 'sample'
    }

    return (
      <div { ...p_loginContainer }>
        <div { ...p_login }>
          <TextField { ...p_username } />
          <TextField { ...p_password } />
          <Popover { ...p_tooltip }>
            <Button { ...p_btn } />
          </Popover>
        </div>
      </div>
    )
  }
}

export default login(Login)