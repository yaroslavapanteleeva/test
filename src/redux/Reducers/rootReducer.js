import {combineReducers} from 'redux'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'
import { noteReducer } from './noteReducer'


export const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    note: noteReducer
})