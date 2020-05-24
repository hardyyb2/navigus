import React from "react"
import { Route, Redirect } from "react-router-dom"


//protcted route to prevent invalid access to routes
const ProtectedRoute = ({
    component: Component,
    isAuthenticated,
    isVerifying,
    ...rest
}) => (
        <Route
            {...rest}
            render={props =>
                isVerifying ? (
                    <div />
                ) : isAuthenticated ? (
                    //if authenticated show the component 
                    <Component {...props} />
                ) : (
                            //else redirect to index page
                            <Redirect
                                to={{
                                    pathname: "/index",
                                    state: { from: props.location }
                                }}
                            />
                        )
            }
        />
    )

export default ProtectedRoute