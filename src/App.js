import React, { Component } from 'react';
import Channel from './channel'
import './App.css'

const channels = [{
  label: 'phone',
  content: 'Out of the loop shotgun approach, Wheelhouse.'
}, {
  label: 'chat',
  content: 'Out of the loop shotgun approach, Wheelhouse.'
}, {
  label: 'email',
  content: 'Out of the loop shotgun approach, Wheelhouse.'
}]

class App extends Component {

  state = {channels}

  handleChannelSelection = cLabel => {
    let channels = this.state.channels
    channels = channels.map(c => { c.selected = false; return c })
    const i = channels.findIndex(c => c.label === cLabel)
    channels[i].selected = true
    this.setState({channels})
  }

  render() {
    return (
      <div className="app">
        <div className='channels-wrapper'>
          {this.state.channels.map(channel => <Channel
            key={channel.label}
            label={channel.label}
            content={channel.content}
            selected={channel.selected}
            labelClass='c-label'
            contentClass='c-content'
            className='c-item-container'
            onChannelSelection={this.handleChannelSelection}
          />)}
        </div>
      </div>
    );
  }
}

export default App;
