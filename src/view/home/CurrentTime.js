import React, { Component } from 'react';
import Clock from 'react-clock';

class CurrentTime extends Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }

  render() {
    return (
      <div>
        <Clock
          value={this.state.date}
        />
      </div>
    );
  }
}

export default CurrentTime;