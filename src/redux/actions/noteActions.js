export const ADD_NOTE = 'ADD_NOTE'
export const ADD_NOTE_ERR = 'ADD_NOTE_ERR'
export const REMOVE_NOTE = 'REMOVE_NOTE'
export const REMOVE_NOTE_ERR = 'REMOVE_NOTE_ERR'


export const addNote = (note) => {
    console.log(ADD_NOTE)
    return (dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore()
        const authorId = getState().firebase.auth.uid

        firestore.collection('notes').add({
            ...note,
            authorId: authorId,
            date: new Date()
        }).then(() => {
            dispatch({
                type: ADD_NOTE,
                payload: note
            })
        }).catch((err) => {
            dispatch({
                type: ADD_NOTE_ERR,
                payload: err
            })
        }) 
        
    }
}

export const removeNote = (note) => {
    return (dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore()

        firestore.collection('notes').doc(note.id).delete()
            .then(() => {
                dispatch({
                    type: REMOVE_NOTE,
                    
                })
            }).catch((err) => {
            dispatch({
                type: REMOVE_NOTE_ERR,
                payload: err
            })
        }) 
        
    }
}