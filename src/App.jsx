import { useState, Component } from 'react'
import { Provider } from 'react-redux'

import './App.css'
import Sidebar from './components/Sidebar'
import Video from './components/Video'
import store from './store'

export default class App extends Component {

  render() {
    return (
      <>
        <div className='App'>
          <Provider store={store}>
            <Sidebar />
            <Video />
          </Provider>
        </div>
      </>
    )
  }
}
