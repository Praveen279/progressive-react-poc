import React from 'react'
import './channel.css'
import classnames from 'classnames'

export default class Channel extends React.Component {

    state = {selected: this.props.selected}

    getClasses = () => {
        var selectedClass = this.props.className ? `${this.props.className}-selected` : 'channel-container-selected'
        return classnames(this.props.className ? this.props.className : 'channel-container', {
            [selectedClass]: this.props.selected
        })
    }

    render() {
        const { label, content, contentClass, labelClass, className, onChannelSelection } = this.props
        return (
            <div className={this.getClasses()} onClick={() => onChannelSelection(label)}>
                <div className={labelClass ? labelClass : 'channel-label'}>{label}</div>
                <div className={contentClass ? contentClass : 'channel-content'}>{content}</div>
            </div>
        )
    }
}
