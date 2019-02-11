import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { client } from './constants';

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

class App extends React.Component {

  state = {
    rates: []
  }

  componentDidMount() {
    this.getRates();
  }

  createCurrency = () => {
    this.props.mutate({ variables: { type: 'NEWC' } }).then((res) => {
      this.getRates();
    })
  }

  getRates = () => {
    client.query({
      query: gql`
        {
          rates(currency: "USD") {
            currency
          }
        }
      `
    }).then(res => {
        this.setState({ rates: res.data.rates.map(r => r.currency) })
    });
  }

  render() {
    const { rates } = this.state;
    return (<div className="container">
      {rates.map(r => <div onClick={this.createCurrency}>{r}</div>)}
    </div>)
  }
}

export default graphql(ADD_TODO)(App);
