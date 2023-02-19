const initialState = {
    history: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HISTORY' : 
            let hist = state.history
            return {
                ...state, 
                history : [...hist, action.payload]
            }
        case 'CLEAR_HISTORY':
            return {
                ...state, 
                history : []
            }
        default: 
            return state
    }
}