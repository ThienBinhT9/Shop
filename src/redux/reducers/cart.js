const products = localStorage.getItem('listCart') !== null ? JSON.parse(localStorage.getItem('listCart')) : []

const initalState = products

const listProduct = (state = initalState,action) => {
    switch(action.type) {
        case 'ADD_PRODUCT':{
            let newList
            const newItem = action.payload
            const duplicate = state.find(e => e.slug === newItem.slug && e.color === newItem.color && e.size === newItem.size)
            if(!!duplicate){
                const listProduct = state.filter(e => e.slug !== newItem.slug || e.color !== newItem.color || e.size !== newItem.size)
                newList =  [...listProduct,{
                    ...newItem,
                    quantity: newItem.quantity + duplicate.quantity
                }]
            }
            else{
                newList = [...state,{
                    ...newItem,
                    id: state.length > 0 ? state[state.length - 1].id + 1 : 1
                }]
            }
            localStorage.setItem('listCart',JSON.stringify(newList))
            return newList
        } 
        case 'DELETE_PRODUCT':{
            const newList = state.filter(item => item.id !== action.payload)
            localStorage.setItem('listCart',JSON.stringify(newList))
            return  newList
        }
        case 'UPDATE_PRODUCT':{
            const newItem = action.payload
            const indexItemOld = state.findIndex(e => e.id === action.payload.id)
            const newList = [...state]
            newList[indexItemOld] = newItem
            localStorage.setItem('listCart',JSON.stringify(newList))
            return newList
        }
        default:
            return state
    }
}

export default listProduct