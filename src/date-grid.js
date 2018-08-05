import React from "react"
import "./date-grid.css"

const data = [{
    day: "SUN"
}, {
    day: "MON",
    hours: ["8:00 am", "5:30 pm"]
}, {
    day: "TUE",
    hours: ["8:00 am", "5:30 pm"]
}, {
    day: "WED",
    hours: ["8:00 am", "5:30 pm"]
}, {
    day: "THU",
    hours: ["8:00 am", "5:30 pm"]
}, {
    day: "FRI",
    hours: ["8:00 am", "5:30 pm"]
}, {
    day: "SAT"
}]

export default class DateGrid extends React.Component {

    constructor(props) {
        super(props)
        this.onHourSelection = this.onHourSelection.bind(this)
    }

    onHourSelection(e) {
        console.log(e)
    }

    render() {
        return (
            <div className="date-container">
                {data.map(d => {
                    if(d.day === "SUN" || d.day === "SAT") {
                        return <div key={d.day} className="date-weekend">{d.day}</div>
                    } else {
                        return (<div key={d.day}>
                            <div className="date-weekday">{d.day}</div>
                            {d.hours ? d.hours.map(h => {
                                return <div key={`${d.day}-${h}}`} className="date-sc-time" onClick={() => this.onHourSelection(h)}>{h}</div>
                            }) : ""}
                        </div>)
                    }
                })}
            </div>
        )
    }
}