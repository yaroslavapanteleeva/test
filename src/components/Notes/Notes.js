import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux';
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'

import './Notes.scss'
import { removeNote } from '../../redux/actions/noteActions';

const Notes = ({notes}) => {
    const dispatch = useDispatch()

    const handleRemove = note => {
        dispatch(removeNote(note))
    }

    return (
        <div className="list-group">
            {notes && notes.map(note => (
                <NavLink
                    
                    className="list-group-item list-group-item-action"
                    key={note.id}
                    to={note.id}
                    
                >
                    <div className="list-group-item__container">
                        <strong>{note.title}</strong>
                        <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => handleRemove(note)}>&times;</button>
                    </div>
                
                </NavLink>

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