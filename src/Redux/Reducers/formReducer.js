const initialState = [
    {
        collection: 'Deform',
        material: 'Дуб',
        style: 'Классический',
        color: 'Белый',
        id: 1
    },
    {
        collection: 'Fix',
        material: 'Ламинированый',
        style: 'Современный',
        color: 'Серый',
        id: 2
    },
    {
        collection: 'Portas',
        material: 'Стекло',
        style: 'ХайТэк',
        color: 'Черный',
        id: 3
    }
]

export const formReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_MOVIE":
            return [...state,{
                collection: action.collection,
                material: action.material,
                style: action.style,
                color: action.color,
                id: action.id,
            }]
        case "DELETE_ITEM":
            return state.filter((user) => user.id !==action.id)
        default:
            return state;        
    }
}