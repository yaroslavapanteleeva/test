import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import  Navbar  from '../components/Navbar'
import  SignIn  from '../components/SignIn'
import SignUp  from '../components/SignUp'
import  Todo from './Todo'

export const Home = () => {
    return (
        <Fragment>
          <Navbar />
          <div className="container">
                <Switch>
                    <Route path="/" exact component={Todo} />
                    <Route path="/login" exact component={SignIn} />
                    <Route path="/register" exact component={SignUp} />
                </Switch>  
            </div>
        </Fragment>
    )
}