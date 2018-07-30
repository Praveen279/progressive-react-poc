import React from 'react'
import './grid.css'

export default class Grid extends React.Component {
    render() {
        const { columnsData, rowData } = this.props
        return (
            <div>
                <div className='grid-col-container'>{columnsData.map(c => <div key={c.field} style={c.style}>{c.name}</div>)}</div>
                <div className='grid-rows-container'>
                    {rowData.map(r => {
                        return <div className='grid-row'>{columnsData.map(c => {
                            return <div key={r[c.field]} style={c.style} className={r.class ? r.class : 'grid-cell'}>
                                {c.cellRenderer ? c.cellRenderer(r[c.field]) : r[c.field]}
                            </div>
                        })}</div>
                    })}
                </div>
            </div>
        )
    }
}
