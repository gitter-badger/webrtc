import React from 'react'
import {Col} from 'react-bootstrap'

import Buttons from './buttons.js'

export default class VideoBox extends React.Component {
  shouldComponentUpdate (nextProps) {
    return nextProps.reason4update !== 'messages'
  }
  render () {
    return (
      <Col>
        <video id='video' autoPlay style={this.props.videostyle}></video>
        <Buttons buttonsStyle={this.props.buttonsStyle}/>
      </Col>
    )
  }
}
