import React from 'react'
import MentorsEditProfile from '../../components/MentorsSignup/MentorsEditProfile.js'
import axios from 'axios'

export default class MentorSignup extends React.Component {
  constructor () {
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()

    const firstName = document.getElementById('firstname').value
    const lastName = document.getElementById('lastname').value
    const username = firstName + '_' + lastName
    const gender = document.getElementById('gender').value
    const age = document.getElementById('age').value
    const profession = document.getElementById('profession').value
    const topics = document.getElementById('topics').value
    const aboutme = document.getElementById('aboutme').value

    axios.post('/api/profile/mentor/' + username, {
      firstName,
      lastName,
      age,
      gender,
      profession,
      topics,
      aboutme,
    }).then((results) => {
      if (results.data.success) {
        console.log('RESULTS: ', results)
        this.props.MUTATE_GLOBAL_STATE({ //eslint-disable-line
          IPCId: results.data.data.apiId,
          IPCPassword: results.data.data.apiPassword,
          name: results.data.data.firstName,
          isLoggedIn: true,
          userType: 'mentor'
        })
        this.props.history.push('/mentor-dashboard')
      } else {
        console.log('something went wrong: ', results)
      }
    }).catch((err) => {
      console.log('[Error]: ' + err)
    })
  }

  render () {
    return (
      <MentorsEditProfile onSubmit={this.onSubmit}/>
    )
  }

}
