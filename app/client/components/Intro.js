import React, { PureComponent } from 'react'
import { findDOMNode } from 'react-dom'
import Ipsum from 'react-lorem-component'
import Navigation from './Navigation'

export default class Intro extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      descriptionIndex: 0,
      descriptionAnimate: 0 
    }

    this.descriptions = [
      'am a Web Developer.',
      'code for living.',
      'make money out of coffee.'
    ]

    this.descriptionAnimations = [
      'wobble',
      'swing',
      'tada'
    ]
  }

  componentDidMount() {
    this.interval = setInterval(
      this.generateRandomIndex.bind(this),
      3000
    )
  }

  componentWillUpdate() {
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  generateRandomIndex() {
    this.setState((prev) => ({
      descriptionIndex: prev.descriptionIndex + 1,
      descriptionAnimate: prev.descriptionAnimate + 1
    }))
  }

  render() {
    const { descriptionIndex, descriptionAnimate } = this.state
    const animation = this.descriptionAnimations[
      descriptionAnimate % this.descriptionAnimations.length
    ]
    const description = this.descriptions[
      descriptionIndex % this.descriptions.length
    ]

    return(
      <div className={`app-intro animated fadeIn`}>
        <div className={`app-intro__inner`}>
          <div className={`headline`}>
            {/* <p>Jacob Baring</p> */}
            <p>Lorem ipsum</p>
          </div>
          <div className={`sub-headline`}>
            <h4 title="Programming is born from sadness and suffering.">
              「プログラミングは悲しみと苦しみから生まれる。」
            </h4>
          </div>
          <div className={`sub-headline`}>
            {/* <p>I { description }</p> */}
          </div>
        </div>
      </div>
    )
  }
}