import React, { Component } from 'react';
import Channel from './channel'
import './App.css'
import TreeAccordian from './TreeAccordian'

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

const scheduleTypes = [{
  label: 'holiday',
  content: 'Out of the loop shotgun approach, Wheelhouse.'
}, {
  label: 'seasonal',
  content: 'Out of the loop shotgun approach, Wheelhouse.'
}, {
  label: 'meeting',
  content: 'Out of the loop shotgun approach, Wheelhouse.'
}]

class App extends Component {

  state = { channels, scheduleTypes }

  handleChannelSelection = (cLabel, stateAttr, channels) => {
    channels = channels.map(c => { c.selected = false; return c })
    const i = channels.findIndex(c => c.label === cLabel)
    channels[i].selected = true
    this.setState({ [stateAttr]: channels })
  }

  render() {
    const { channels, scheduleTypes } = this.state
    return (
      <div className="app">
        <TreeAccordian
          index="1"
          className="channels-accordian"
          showContent={true}
          childClass="accordian-child-class"
          title="Set channel(s)."
          description="Some text to display."
        >
          <div className='channels-wrapper'>
            {channels.map(channel => <Channel
              key={channel.label}
              label={channel.label}
              content={channel.content}
              selected={channel.selected}
              labelClass='c-label'
              contentClass='c-content'
              className='c-item-container'
              onChannelSelection={label => this.handleChannelSelection(label, "channels", channels)}
            />)}
          </div>
        </TreeAccordian>
        <TreeAccordian
          index="2"
          className="channels-accordian"
          childClass="accordian-child-class"
          title="Set schedule type."
          description="Some text to display."
        >
          <div className='channels-wrapper'>
            {scheduleTypes.map(sc => <Channel
              key={sc.label}
              label={sc.label}
              content={sc.content}
              selected={sc.selected}
              labelClass='c-label'
              contentClass='c-content'
              className='c-item-container'
              onChannelSelection={label => this.handleChannelSelection(label, 'scheduleTypes', scheduleTypes)}
            />)}
          </div>
        </TreeAccordian>
        <TreeAccordian
          index="3"
          className="channels-accordian"
          childClass="accordian-child-class"
          title="Set date and time."
          description="Some text to display."
        >
        </TreeAccordian>
        <TreeAccordian
          index="4"
          className="channels-accordian"
          childClass="accordian-child-class"
          title="Assign to call targets and queues."
          description="Some text to display."
        >
        </TreeAccordian>
        <TreeAccordian
          index="5"
          className="channels-accordian"
          childClass="accordian-child-class"
          title="Enter schedule details."
          description="Some text to display."
        >
        </TreeAccordian>
      </div>
    );
  }
}

export default App;
