import './App.scss';
import { Component } from 'react';
import { connect } from 'react-redux';
import { loadNetwork } from './redux/interactions';
import { metamaskErrorSelector, networkProviderSelector } from './redux/selectors';
import { Col, Container, Row, Alert } from 'react-bootstrap';
import HealthCard from './HealthCard';
import OracleCard from './OracleCard';
import USMCard from './USMCard';
import FUMCard from './FUMCard';
import { clearMetamaskError } from './redux/actions';

class App extends Component {

  render() {

    const {dispatch, networkProvider, metamaskError } = this.props;

    if (!networkProvider) {
      loadNetwork(dispatch);
    }

    if (metamaskError) {
      alert(metamaskError.toString())
      dispatch(clearMetamaskError())
    }

    return (
      <div className="App">
        <Container>
          <Alert variant="warning">
            <b>Displaying live data for <a href="https://twitter.com/usmfum/status/1339323408618835969" target="_blank" rel="noreferrer">Baby-USM.</a></b>
            This is a temporary "live" protocol used for research purposes. On the 15th of January 2021, the Baby-USM protocol will become withdraw-only and read-only.
            The data from this trial run will be analysed in the run up to the full release of USM.
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
    networkProvider: networkProviderSelector(state),
    metamaskError: metamaskErrorSelector(state)
  }
}

export default connect(mapStateToProps)(App);
