import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Dashboard } from '../components/Dashboard'
import { Navbar } from '../components/Navbar'
import { SignIn } from '../components/SignIn'
import { SignUp } from '../components/SignUp'

export const Home = () => {
    return (
        <Fragment>
          <Navbar />
          <div className="container pt-4">
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/login" exact component={SignIn} />
                    <Route path="/register" exact component={SignUp} />
                </Switch>  
            </div>
        </Fragment>
    )
}