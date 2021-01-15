import './App.scss';
import { Component } from 'react';
import { connect } from 'react-redux';
import { loadNetwork } from './redux/interactions';
import { networkProviderSelector } from './redux/selectors';
import { Col, Container, Row, Alert } from 'react-bootstrap';
import HealthCard from './HealthCard';
import OracleCard from './OracleCard';
import USMCard from './USMCard';
import FUMCard from './FUMCard';

class App extends Component {

  render() {

    const {dispatch, networkProvider } = this.props;

    if (!networkProvider) {
      loadNetwork(dispatch);
    }

    return (
      <div className="App">
        <Container>
          <Alert variant="success">
            <b>Displaying live data for <a href="https://twitter.com/usmfum/status/1339323408618835969" target="_blank" rel="noreferrer">Baby-USM.</a></b>
            This is a temporary "live" protocol used for research purposes. Baby-USM protocol is now withdraw-only and read-only.
            Minting Baby-USM or Baby-FUM is now permanently disabled. Thanks to everyone who took part!
          </Alert>
          <Row>
            <Col sm="12" md="6">
              <HealthCard />
            </Col>
            <Col sm="12" md="6">
              <OracleCard />
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="6">
              <USMCard />
            </Col>
            <Col sm="12" md="6">
              <FUMCard />
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
