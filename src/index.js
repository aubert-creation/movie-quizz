import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import Root from 'screens/Root'

import 'utils/i18n'

import './index.scss'

const client = new ApolloClient({
  uri: 'http://localhost:1337/dev',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById('root')
)
