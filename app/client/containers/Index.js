import React, { PureComponent, Fragment } from 'react'
import Intro from '../components/Intro'
import Overview from '../components/Overview'

export default class Index extends PureComponent {
	constructor(props) {
		super(props)
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