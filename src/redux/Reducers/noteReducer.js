import { act } from "react-dom/test-utils";
import { ADD_NOTE, ADD_NOTE_ERR } from "../actions/noteActions";

const initState = {
    notes: {}
}

export const noteReducer = (state = initState, action) => {
    console.log(action.type)
    switch (action.type) {
        case ADD_NOTE: 
            console.log('Add note', action.note);
            return {...state, note: action.payload}
        case ADD_NOTE_ERR: 
            console.log('Add error note', action.err);
            return {...state, err: action.payload}
        default:
            console.log('error')
            console.log(action.type)
            return state 
 
    }
    
}

