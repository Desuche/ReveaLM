export const addHistory = (data) => {
    return {
        type : 'ADD_HISTORY',
        payload: data
    }
}

export const clearHistory = () => {
    return {
        type : 'CLEAR_HISTORY'
    }
}