import React, { PureComponent } from 'react'
import Ipsum from 'react-lorem-component'

export default class Overview extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={`app-overview`}>
        <div className={`app-overview__inner`}>
          <Ipsum />
        </div>
      </div>
    )
  }
}