export const ADD_NOTE = 'ADD_NOTE'
export const ADD_NOTE_ERR = 'ADD_NOTE_ERR'


export const addNote = (note) => {
    return (dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore()

        firestore.collection('notes').add({
            ...note,
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