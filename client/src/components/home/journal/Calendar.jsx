import React, { Component } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';


class Cal extends Component {
  handleLogout = () => {
    const { logout } = this.context
    logout();
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        {/* <Calendar onChange={this.onChange} value={this.state.date} /> */}
      </div>
    )
  }
}

export default Cal
