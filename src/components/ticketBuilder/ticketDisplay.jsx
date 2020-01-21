import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core'
import '../../scss/components/ticketBuilder/ticketDisplay.scss'

class TicketDisplay extends Component {
    render() {
        return (
            <Paper id="ticketDisplay-div" elevation={3}>
                <p className="header">h1. Expected behaviour</p>
                {this.props.expectedBehaviour || "Type the expected behaviour..."}
                <p className="header">h1. Observed behaviour</p>
                {this.props.observedBehaviour || "Type the observed behaviour..."}
            </Paper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        expectedBehaviour: state.ticketInfo.expectedBehaviour,
        observedBehaviour: state.ticketInfo.observedBehaviour,
    }
}

export default connect(mapStateToProps)(TicketDisplay);