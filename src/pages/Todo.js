import React, { Fragment } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Content } from '../components/Content/Content';
import { Sidebar } from '../components/Sidebar/Sidebar';

const Todo = ({uid}) => {
    if(!uid) {
        return <Redirect to="/login" />
    }
    
    return (
        <Fragment>
            <Sidebar />
            <Content />
       </Fragment>
    )
}

const mapStateToProps = state => {
    const uid = state.firebase.auth.uid
    return {
        uid: uid
    }
}

export default connect(mapStateToProps)(Todo);