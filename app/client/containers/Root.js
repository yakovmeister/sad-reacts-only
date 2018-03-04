import React, { Fragment, PureComponent } from 'react'
import Container from './../components/Container'
import { renderRoutes } from "react-router-config";

export default class Root extends PureComponent {

	constructor(props) {
		super(props)

		this.state = {
			is_loaded: false
		}
	}

	componentDidMount() {
		console.log('mounted')
		this.setState((prevState) => ({
			is_loaded: !prevState.is_loaded
		}))
	}

  render() {
    const { route } = this.props
    const { is_loaded } = this.state

    return (
    	is_loaded
    		? renderRoutes(route.routes)
    		: 'hallo'
    )
  }
}
