import React, { PureComponent } from 'react'
import Ipsum from 'react-lorem-component'

export default class Overview extends PureComponent {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const AOS = require('aos')

    AOS.init()
  }

  render() {
    return (
      <div className={`app-overview`}>
        <div className={`app-overview__inner`}
          data-aos={`fade-up`}
          data-aos-anchor-placement={`top-center`}
        >
          <Ipsum />
        </div>
      </div>
    )
  }
}