import React from 'react'
import './treeAccordian.css'

export default class TreeAccordian extends React.Component {

    state = {showContent: !!this.props.showContent}

    render() {
        const {children, index, title, description, className, childClass} = this.props
        const {showContent} = this.state
        return (
            <div className={className}>
                <div className="tacc-title-container" onClick={() => {this.setState({showContent: !this.state.showContent})}}>
                    <div className={showContent ? "tacc-index tacc-show" : "tacc-index tacc-common"}>{index}</div>
                    <div>
                        <div className="tacc-title">{title}</div>
                        <div className="tacc-desc">{description}</div>
                    </div>
                </div>
                <div className={childClass}>
                    {showContent ? children : ""}
                </div>
            </div>
        )
    }
}
