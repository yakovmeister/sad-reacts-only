import React, { PureComponent, Fragment } from 'react'
import { Button } from '@blueprintjs/core'
import TextField from './../components/TextField'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class Login extends PureComponent {
	constructor(props) {
		super(props)
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
      className: 'login-input'
    }

    const p_password = {
      icon: 'pt-icon-key',
      className: 'login-input',
      type: 'password'
    }

    const p_btn = {
      className: 'pt-fill pt-intent-primary',
      text: 'Login'
    }

    console.log(this.props.users)
    return (
      <div { ...p_loginContainer }>
        <div { ...p_login }>
          <TextField { ...p_username } />
          <TextField { ...p_password } />
          <Button { ...p_btn } />
        </div>
      </div>
    )
  }
}

export default graphql(gql`query { users { id, name } }`)(({ data }) => <Login { ...data } />)