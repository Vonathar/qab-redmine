let initialState = {
    expectedBehaviour: "",
    observedBehaviour: "",
}

export default function ticketInfo(state = initialState, action) {
    switch (action.type) {
        case "UPDATED_EXPECTED_BEHAVIOUR":
            return Object.assign({}, state, {
                expectedBehaviour: action.payload
            })
        case "UPDATED_OBSERVED_BEHAVIOUR":
            return Object.assign({}, state, {
                observedBehaviour: action.payload
            })
        default:
            return state;
    }
}