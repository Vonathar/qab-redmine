import React, { Component } from 'react';
import '../../scss/components/ticketBuilder/ticketBuilder.scss'
import InputText from '../common/inputText'

class TicketBuilder extends Component {
    render() {
        return (
            <div id="ticketBuilder-div">
                <p class="title">Ticket info</p>
                <InputText label="Expected behaviour" />
                <InputText label="Observed behaviour" />
            </div>
        )
    }
}


export default TicketBuilder;