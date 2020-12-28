import logo from './logo.svg';
import './App.scss';
import { Component } from 'react';
import { connect } from 'react-redux';
import { loadNetwork } from './redux/interactions';
import { networkProviderSelector } from './redux/selectors';

class App extends Component {

  render() {

    const {dispatch, networkProvider} = this.props;
    console.log(networkProvider);
    if (!networkProvider) {
      loadNetwork(dispatch);
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    networkProvider: networkProviderSelector(state)
  }
}

export default connect(mapStateToProps)(App);
