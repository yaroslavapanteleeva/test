import React, { Fragment, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Content  from '../components/Content/Content';
import { Sidebar } from '../components/Sidebar/Sidebar';

const Todo = ({uid, notes}) => {
    const [activeItem, setActiveItem] = useState('')
    if(!uid) {
        return <Redirect to="/login" />
    }
    console.log(notes)
    
    return (
        <Fragment>
            <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
            {notes && activeItem && <Content note={activeItem} notes={notes}/>}
       </Fragment>
    )
}

const mapStateToProps = state => {
    const uid = state.firebase.auth.uid
    const notes = state.firestore.ordered.notes;
    return {
        uid: uid,
        notes: notes
    }
}


export default connect(mapStateToProps)(Todo);