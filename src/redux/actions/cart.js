const ADD_PRODUCT = (payload) => {
    return {
        type:'ADD_PRODUCT',
        payload
    }
}

const UPDATE_PRODUCT = (payload) => {
    return {
        type:'UPDATE_PRODUCT',
        payload
    }
}

const DELETE_PRODUCT = (payload) => {
    return {
        type:'DELETE_PRODUCT',
        payload
    }
}

export {ADD_PRODUCT,DELETE_PRODUCT, UPDATE_PRODUCT} 