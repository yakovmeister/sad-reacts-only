import React, { PureComponent, Fragment } from 'react'
import Intro from '../components/Intro'
import Overview from '../components/Overview'
import Navigation from '../components/Navigation'

export default class Index extends PureComponent {
	constructor(props) {
		super(props)
  }
  
  componentDidMount() {
    console.log(this.props)
  }

	render() {
		return (
			<Fragment>
				<Intro />
        <Overview />
			</Fragment>
		)
	}
}