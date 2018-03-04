import React, { PureComponent } from 'react'
import { findDOMNode } from 'react-dom'
import Ipsum from 'react-lorem-component'
import Navigation from './Navigation'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Intro extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      descriptionIndex: 0,
      descriptionAnimate: 'fadeInLeft' 
    }

    this.descriptions = [
      'Web Developer',
      '2k Dota2 Scrub',
      'Coffee Enthusiast'
    ]
  }

  componentDidMount() {
    this.interval = setInterval(
      this.generateRandomIndex.bind(this),
      3000
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  generateRandomIndex() {
    this.setState({
      descriptionIndex: Math.floor(Math.random() * this.descriptions.length)
    })
  }

  render() {
    const { descriptionIndex, descriptionAnimate } = this.state

    return(
      <div className={`app-intro animated fadeIn`}>
        <div className={`app-intro__inner`}>
          <div className={`app-intro__inner__headline`}>
            <p>Jacob Baring</p>
          </div>
          <div className={`app-intro__inner__sub-headline`}>
            <ReactCSSTransitionGroup
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
              transitionName={{
                enter: "animated",
                enterActive: "rubberBand",
                leave: "animated",
                leaveActive: "rubberBand"
              }}
            >
              <p key={`description-text`}>{ this.descriptions[descriptionIndex] }</p>
            </ReactCSSTransitionGroup>
          </div>
          <Navigation />
        </div>
      </div>
    )
  }
}