export function updatedExpectedBehaviour(payload) {
    return {
        type: "UPDATED_EXPECTED_BEHAVIOUR",
        payload
    }
}

export function updatedObservedBehaviour(payload) {
    return {
        type: "UPDATED_OBSERVED_BEHAVIOUR",
        payload
    }
}