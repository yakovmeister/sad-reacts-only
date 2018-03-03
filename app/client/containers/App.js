import React, { Fragment, PureComponent } from 'react'
import Container from './../components/Container'
import { renderRoutes } from 'react-router-config';

export default class App extends PureComponent {
  render() {
    const { route } = this.props

    return (
      <Fragment>
        <Container>
          { renderRoutes(route.routes) }
        </Container>
      </Fragment>
    )
  }
}
