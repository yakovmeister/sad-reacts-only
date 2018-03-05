import React, { PureComponent, Fragment } from 'react'
import Intro from '../components/Intro'
import Overview from '../components/Overview'
import Navigation from '../components/Navigation'
import { connect } from 'react-redux'

class Index extends PureComponent {
	constructor(props) {
		super(props)
  }
  
  componentWillMount() {}

  componentDidMount() {
  	console.log(this.props)
  }

	render() {
		return (
			<Fragment>
        <Navigation />
				<Intro />
        <Overview />
			</Fragment>
		)
	}
}

export default connect(state => state)(Index)