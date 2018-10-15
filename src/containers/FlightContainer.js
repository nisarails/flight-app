import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadFlights } from '../actions/flight.action';
import FlightComponent from '../components/FlightComponent';
import { Tabs, Tab } from 'react-bootstrap';

class FlightContainer extends Component {
  async componentDidMount() {
    await this.props.loadFlights('departures');
  }

  handleSelect = async (key) => {
    const filter = key ? 'departures' : 'arrivals';
    await this.props.loadFlights(filter);
  }

  render() {
    const tabsInfo = [
      {key: true, title: "Departures"},
      {key: false, title: "Arrivals"}
    ]
    return(
      <Fragment>
        <h2>Flight information</h2>
        <Tabs defaultActiveKey={true} onSelect={this.handleSelect} id="uncontrolled-tab-example">
          {tabsInfo.map((t) => {
            return <Tab key={t.key} eventKey={t.key} title={t.title}>
              <FlightComponent flights={this.props.flights} />
            </Tab>;
          })}
        </Tabs>
      </Fragment>
    )
  }
}

const mapDispatchToProps = {
  loadFlights
};

const mapStateToProps = (state) => {
  return {
    flights: state.flightInfo.flights
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightContainer);