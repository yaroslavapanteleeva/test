import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux';
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'

import './Notes.scss'
import { removeNote } from '../../redux/actions/noteActions';

const Notes = ({notes, activeItem, setActiveItem}) => {
    /* const [activeItem, setActiveItem] = useState('') */
    const dispatch = useDispatch()

    const handleRemove = note => {
        dispatch(removeNote(note))
    }

    const onClickItem = note => {
        setActiveItem(note)
    }

   

    console.log(notes)

    return (
        <div className="list-group">
            {notes && notes.map(note => (
                <a
                    className={`list-group-item list-group-item-action ${(activeItem && activeItem.id === note.id) ? ('active') : ('')}`}
                    key={note.id}
                    onClick={onClickItem ? () => onClickItem(note) : null}
                    
                >
                    <div className="list-group-item__container">
                        <strong>{note.title}</strong>
                        <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => handleRemove(note)}>&times;</button>
                    </div>
                
                </a>

            ))}
        
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    const notes = state.firestore.ordered.notes;
    return {
      notes: notes,
      uid: state.firebase.auth.uid
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect((ownProps) => [
      {
        collection: "notes",
        where: ["authorId", "==", ownProps.uid],
        orderBy: ["date", "desc"]
      }
    ])
)(Notes);