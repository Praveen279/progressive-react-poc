import React, { Component } from 'react'
import './App.css'
import Grid from './grid'

class App extends Component {

  columnsData = [{
    name: 'Type',
    field: 'type',
    style: {
      width: '150px'
    }
  }, {
    name: 'Name',
    field: 'name',
    style: {
      width: '150px'
    }
  }, {
    name: 'Description',
    field: 'description',
    style: {
      width: '300px'
    }
  }, {
    name: 'Status',
    field: 'status',
    cellRenderer: value => <div>{value ? 'Yes' : 'No'}</div>,
    style: {
      width: '150px'
    }
  }]

  rowData = [{
    type: 'Base',
    name: 'HOO1',
    description: 'HOO Desc 1',
    status: true
  }, {
    type: 'Meeting',
    name: 'HOO2',
    description: 'HOO Desc 2',
    status: true
  }, {
    type: 'Seasonal',
    name: 'HOO3',
    description: 'HOO Desc 3',
    status: false
  }, {
    type: 'Holiday',
    name: 'HOO4',
    description: 'HOO Desc 4',
    status: false
  }]

  render() {
    return (
      <div className="app">
        <Grid
          columnsData={this.columnsData}
          rowData={this.rowData}
        />
      </div>
    );
  }
}

export default App;
