import React, { Component } from 'react';
import Navbar from './components/common/navbar'
import TicketBuilder from './components/ticketBuilder/ticketBuilder'
import TicketDisplay from './components/ticketBuilder/ticketDisplay'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <TicketBuilder />
        <TicketDisplay />
      </div>
    );
  }
}

export default App;
