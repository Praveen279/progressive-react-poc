import React from 'react';
import ReactDOM from 'react-dom';
import App, {handleChange} from './App';
import {mount} from 'enzyme';
import wait from 'waait';
import { ApolloProvider } from 'react-apollo';
import clientMock from './clientMock';
import './enzyme-adapter';

jest.mock('./constants');

describe("app", () => {
  it('react-test-renderer', () => {
    const tree = mount((
      <ApolloProvider client={clientMock}>
        <App />
      </ApolloProvider>
    ))
    expect(tree.find('.container').length).toBe(1);
  });
});
