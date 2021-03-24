const reducer = (state, action) => {
    console.log(state);
    if(action.type === 'CLEAR_CART') {
        return { ...state, cart:[] }
    }
    return state;
}

export default reducer;