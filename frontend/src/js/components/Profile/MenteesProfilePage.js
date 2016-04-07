import React from 'react'
import {Grid, Row, Col, Button} from 'react-bootstrap'


class MenteesProfilePage extends React.Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={1}/>
          <Col xs={3}>
            <h3> {this.props.firstname} {this.props.lastname}</h3>
            <p>gender: {this.props.gender}</p>
            <p>age: {this.props.age}</p>
            <p>profession: {this.props.profession}</p>
            <p>topics: </p>
            <ul>
              {this.props.topics.map((topic) => {
                return <li>{topic}</li>
              })}
            </ul>
            <p>some things about me: </p>
            <p> {this.props.aboutme}</p>
            <Button> Request a chat </Button>
          </Col>
        </Row>
      </Grid>
    )
  }
}

MenteesProfilePage.propTypes = {
  firstname: React.PropTypes.string.isRequired,
  age: React.PropTypes.number.isRequired,
  gender: React.PropTypes.string.isRequired,
  profession: React.PropTypes.string.isRequired,
  topics: React.PropTypes.array.isRequired,
  aboutme: React.PropTypes.string.isRequired
}

MenteesProfilePage.defaultProps = {
  firstname: 'smellyAndrew',
  age: 5,
  gender: 'female',
  profession: 'beingAndrew',
  topics: ['Andrew', 'Andrews greatness', 'my glossy soft head of hair'],
  aboutme: 'I am da Bomb'
}

export default MenteesProfilePage