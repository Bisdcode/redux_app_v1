import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Sidebar from './components/Sidebar'
import Video from './components/Video'
import store from './store'

class App extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.showMessage && this.props.showMessage) {
      const { alertMessage, dispatch } = this.props;

      switch (alertMessage.type) {
        case 'info':
          toast.info(alertMessage.message);
          break;
        case 'error':
          toast.error(alertMessage.message);
          break;
        case 'success':
          toast.success(alertMessage.message);
          break;
        case 'warning':
          toast.warning(alertMessage.message);
          break;
        default:
          break;
      }
      dispatch({ type: 'HIDE_MESSAGE' });
    }
  }

  render() {
    return (
      <div className='App'>
        <Sidebar />
        <Video />
        <ToastContainer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  alertMessage: state.ui.alertMessage,
  showMessage: state.ui.showMessage,
});

const ConnectedApp = connect(mapStateToProps)(App);

export default function Root() {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
}