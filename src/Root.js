import React, { lazy, Suspense } from 'react'


import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import { Grid } from '@material-ui/core';

import Spinner from './UI/Spinner/Spinner'

const HomePage = lazy(() => import('./Pages/HomePage/HomePage'))
const Signup = lazy(() => import('./Pages/Signup/Signup'))
const Login = lazy(() => import('./Pages/Login/Login'))
const LandingPage = lazy(() => import('./Pages/LandingPage/LandingPage'))
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage/NotFoundPage'))

const LoadingScreen = (
    <Grid container justify="center"
        style={{
            minWidth: '100vw',
            minHeight: '100vh',
            color: '#f5f5f5',
            alignItems: 'center'
        }}>
        <Spinner />
    </Grid>
)

const Root = props => {
    const { location } = props

    return (
        <Suspense fallback={LoadingScreen}>
            <Switch >
                <ProtectedRoute
                    exact
                    key='home'
                    path='/'
                    component={HomePage}
                    isAuthenticated={props.isAuthenticated}
                    isVerifying={props.isVerifying}
                />
                <Route exact key="index" path='/index' component={LandingPage} />
                <Route exact key="login" path='/login' component={Login} />
                <Route exact key="signup" path='/signup' component={Signup} />
                <Route component={NotFoundPage} />
            </Switch>
        </Suspense>
    )
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isVerifying: state.auth.isVerifying
    };
}


export default connect(mapStateToProps)(withRouter(Root));