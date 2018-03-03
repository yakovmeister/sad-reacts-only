import React, { PureComponent } from 'react'
import Ipsum from 'react-lorem-component'

export default class Intro extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className={`app-intro`}>
        <div className={`app-intro__inner`}>
          <div className={`app-intro__inner__headline`}>
            <Ipsum
              count={1}
              sentenceLowerBound={1}
              sentenceUpperBound={1}
            />
          </div>
          <div className={`app-intro__inner__sub-headline`}>
            <Ipsum
              count={1}
              sentenceLowerBound={1}
              sentenceUpperBound={4}
            />
          </div>
        </div>
      </div>
    )
  }
}