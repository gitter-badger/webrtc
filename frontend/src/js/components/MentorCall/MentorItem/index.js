import React from 'react'

class MentorItem extends React.Component {
  constructor () {
    super()
    this.onClickFunc = this.onClickFunc.bind(this)
  }
  onClickFunc () {
    console.log('calling onClickFunc');
    this.props.changeState({
      pleaseCall: true
    })
    let ourRoom = null
    IPCortex.PBX.rooms.forEach(((room) => {
      if (room.cID === this.props.mentor.cID) ourRoom = room;
    }).bind(this))
    console.log(ourRoom,'ourroom');
    if (!ourRoom)
    this.props.mentor.chat(() => {
      console.log('successful chat');
    });
    else
    this.startVideoCall(ourRoom);
  }
  startVideoCall(room) {
    navigator.mediaDevices.getUserMedia({audio: true, video: true}).then((stream) => {
      room.videoChat(stream).addListener('update', (av) => {
        //launch video window here
        /* Only process the Av instance if it has remote media */
        console.log('AV >>>>', av)
        console.log(Object.keys(av.remoteMedia)[0], '<<<< object keys');

        if ( !Object.keys(av.remoteMedia).length ){
          console.log('av.remotemedia not object', typeof av.remoteMedia, typeof av.remoteMedia[0]);
          return
        }
        let streamio = av.remoteMedia[Object.keys(av.remoteMedia)[0]]
        console.log(streamio, '<<<< STREAMIO')

        if (streamio.status == 'connected') {
          console.log('3 remote media is connected');
          /* Create a new video tag to play/display the remote media */
          let video = document.getElementById('video')
          // following line from adapterjs (close to vanilla webrtc)
          attachMediaStream(video, streamio)
          video.play()
        }
      })
    })
  }
  render () {
    return (
      <li>{this.props.mentor.username}<button onClick={this.onClickFunc}>call</button></li>
    )
  }
}

export default MentorItem
