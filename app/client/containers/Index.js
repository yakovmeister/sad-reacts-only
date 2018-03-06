import React, { PureComponent, Fragment } from 'react'
import Intro from '../components/Intro'
import Overview from '../components/Overview'
import Navigation from '../components/Navigation'
import { connect } from 'react-redux'

class Index extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			fixedNavigation: false
		}

		this.handleStickyNavigation = this.handleStickyNavigation.bind(this)
  }
  
  componentWillMount() {}

  componentDidMount() {
		window.addEventListener('scroll', this.handleStickyNavigation)
	}
	
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleStickyNavigation)
	}

	handleStickyNavigation() {
		const { fixedNavigation } = this.state
		if(window.pageYOffset > 100 && !fixedNavigation) {
			this.setState({
				fixedNavigation: true
			})
		} else if (window.pageYOffset <= 100 && fixedNavigation) {
			this.setState({
				fixedNavigation: false
			})
		}
	}

	render() {
		const { fixedNavigation } = this.state
		return (
			<Fragment>
        <Navigation fixed={fixedNavigation} />
				<Intro />
        <Overview />
			</Fragment>
		)
	}
}

export default connect(state => state)(Index)