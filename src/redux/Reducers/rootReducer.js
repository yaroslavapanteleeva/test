import {combineReducers} from 'redux'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'
import { noteReducer } from './noteReducer'
import { authReducer } from './authReducer'


export const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    note: noteReducer,
    auth: authReducer
})