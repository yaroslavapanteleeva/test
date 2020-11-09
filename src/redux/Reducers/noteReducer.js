
import { ADD_NOTE, ADD_NOTE_ERR, REMOVE_NOTE, REMOVE_NOTE_ERR } from "../actions/noteActions";

const initilState = {
    notes: []
}

export const noteReducer = (state = initilState, action) => {
    switch (action.type) {
        case ADD_NOTE: 
            console.log('Add note');
            return {...state, note: action.payload}
        case ADD_NOTE_ERR: 
            console.log('Add error note');
            return state
        case REMOVE_NOTE:
            console.log('remove note')
            return state
        case REMOVE_NOTE_ERR:
            return state
        default:
            return state
 
    }
    
}

