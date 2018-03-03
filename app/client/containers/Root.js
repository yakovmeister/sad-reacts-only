import React, { Fragment, PureComponent } from 'react'
import Container from './../components/Container'
import { renderRoutes } from "react-router-config";

export default class Root extends PureComponent {
  render() {
    const { route } = this.props

    return renderRoutes(route.routes)
  }
}
