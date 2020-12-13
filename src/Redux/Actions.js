export const logIn = () =>{
    return{
        type: 'LOG_IN',
    }
}

export const logOut = () =>{
    return{
        type: "LOG_OUT"
    }
}

let currentID = 2;
export const addNextDoor = (collection, material, style, color, id) =>{
    return {
        type: "ADD_MOVIE",
        collection, material, style, color, id: ++currentID
    }
}

export const deleteCurentDoor = (id) =>{
    return{
        type: "DELETE_ITEM",
        id
    }
}
