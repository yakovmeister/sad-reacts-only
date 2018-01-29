import React, { PureComponent, Fragment } from 'react'
import { Button } from '@blueprintjs/core'
import TextField from './../components/TextField'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class Login extends PureComponent {
	constructor(props) {
    super(props)
    
    this.state = {
      input: {
        usename: '',
        password: ''
      }
    }
  }
  
  componentDidUpdate(nextProps) {
    console.log(nextProps)
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

    const sample = login(input.username, input.password)

    console.log(sample)
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

const mutation = gql`
  mutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token,
      error
    }
  }
`

const login = graphql(mutation, {
  props: ({ ownProps, mutate }) => ({
    login(username, password) {
      return mutate({
        variables: {
          username,
          password
        }
      })
      .then(({ data }) => {
        window.localStorage.token = data.login.token
      })
      .catch(reject => {
        console.log(reject)
      })
    }
  })
})

export default login(Login)