import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core'
import '../../scss/components/common/inputText.scss';
import { updatedTicketName, updatedExpectedBehaviour, updatedObservedBehaviour } from '../../redux/actions/ticketInfo';

class InputText extends Component {
    dispatchToStore = (payload) => {
        switch (payload.id) {
            case "Expected behaviour": return this.props.dispatch(updatedExpectedBehaviour(payload.value));
            case "Observed behaviour": return this.props.dispatch(updatedObservedBehaviour(payload.value));
        }
    }
    render() {
        return (
            <TextField className="inputText-div" id={this.props.label} label={this.props.label} color="secondary" onChange={(e) => { e.preventDefault(); this.dispatchToStore(e.target) }} />
        )
    }
}

export default connect(null)(InputText);