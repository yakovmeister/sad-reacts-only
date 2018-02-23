import React, { Fragment, PureComponent } from 'react'
import TopNav from './../components/TopNav'
import Container from './../components/Container'
import { renderRoutes } from 'react-router-config';

export default class App extends PureComponent {
  render() {
    const { route } = this.props

    return (
        <Fragment>
            <TopNav />
            <Container>
                { renderRoutes(route.routes) }
            </Container>
        </Fragment>
    )
  }
}
