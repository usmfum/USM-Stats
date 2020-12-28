import './App.scss';
import { Component } from 'react';
import { connect } from 'react-redux';
import { loadNetwork } from './redux/interactions';
import { networkProviderSelector } from './redux/selectors';
import { Col, Container, Row } from 'react-bootstrap';

class App extends Component {

  render() {

    const {dispatch, networkProvider} = this.props;
    if (!networkProvider) {
      loadNetwork(dispatch);
    }

    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              Hello!
            </Col>
            <Col>
              Ola
            </Col>
          </Row>
        </Container>
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
