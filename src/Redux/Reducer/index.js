import { LOADING } from "../Actions/actionsType";

const initialState = {
    loading: true,
}

export default function rootReducer(state = initialState, action) {
    switch(action){
        case LOADING:
            return{
                ...state,
                loading: false
            };
        default: 
            return state;
    }
}