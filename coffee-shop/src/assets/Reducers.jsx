export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADDTOCART":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
        case "REMOVEFROMCART":
            return {
                ...state, cart: [...state.cart.filter((c) => {
                    return c.id !== action.payload.id
                })]
            }
        case "changecartqty":
            return {
                ...state, cart: [...state.cart.filter((c) => {
                    return (
                        c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
                    )
                })]
            }
        default:
            return state
    }
}
export const ProductReducer = (state, action) => {
    switch (action.type) {
        case "sortbyprice":
            return { ...state, sort: action.payload }
        case "filterbystock":
            return { ...state, stock: !state.stock }
        case "filterbysearch":
            return { ...state, searchQuery: action.payload }
        case "clearfilters":
            return { stock: false }
        default:
            return state
    }
}