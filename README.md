
### Project Structure 
1. __assets__  
    * AdorableAvatar 
    * images

2. __components__
    * CardsComponent
        * UsersList
    * CurrentlyViewedUser
    * DetailsForm
    * Logout
    * ProtectedRoute

3. __firebase__

4. __Pages__
    * HomePage
    * LandingPage
    * Login
    * NotFoundPage
    * Signup

5. __store__
    * actions
    * reducers

6. __UI__
    * LightToolTip
    * MiniDrawer
    * Modal
    * SlideDownAnimation
    * Spinner
    * StyledBadge

### assets
1. __AdorableAvatar__  =>  
        Get adorable avatar from [link](https://api.adorable.io/avatars/${size}/${id})
2. __images__ =>  
        Various images used in app including logo.

### components
1. __CardsComponent__ =>
    * _Child Components_
        * UsersList
    * _props_
        * From HomePage
            * totalUsers, type
2. __UsersList__
    * _Child Components_
        * UserModal (Modal)
        * CurrentlyViewedUser
        * StyledBadge
        * LightToolTip
    * _props_
        * From CardsComponent
            * clients[totalUsers in parent], type
        * From redux store
            * totalClients, clearAvatarData(), getAvatarData()

3. __CurrentlyViewedUser__
    * _props_
        * From UsersList
            * handleClose()
        * From redux store
            * currentlyViewedUser

4. __DetailsForm__
    * _Child Components_
        * FormInput (contains form for signup)  
    * _props_
        * From redux store
            * userDetails, setUserDetails()
    * _functions_
        * checkValidation -  
            validation using validator and custom validation
        * inputChangedHandler -  
            update form and validation status on onChange event
5. __Logout__
    * _props_
        * From parent
            * handleClose()
        * From redux store
            * userEmail, logout(), setTotalClients()

6. __ProtectedRoute__
    * _props_
        * From redux store
            * isAuthenticated, isVerifying

### firebase  
    * Contains firebase config data (apis present in local .env file)

### Pages
1.  __HomePage__
    * _Child Components_
        * MiniDrawer
        * Spinner
        * CardsComponent
    * _props_
        * From redux store
            * userEmail, totalClients, totalUsers, offlineUsers, setTotalClients(), getTotalUsers()
    * _functions_
        * handleChange -  
            set user type as 'online', 'offline','total','all' to see respective Cards

2. __LandingPage__
    * _props_
        * From redux store
           * isAuthenticated, user

4. __Login__
    * _props_
        * From redux store
           * isAuthenticated, user, isLoggingIn, loginError, setLogin()

4. __NotFoundPage__
    *  A 404 Page

5. __Signup__
    * _Child Components_
        * DetailsForm
        * SlideDownAnimation
    * _props_
        * From redux store
           * isAuthenticated, user, isLoggingIn, signupError, signupErrMessage, userDetails, signupUser()
    * _functions_
        * handleSignUp -  
            set up address and other details in an objesct and signupUser() 

### UI
1. __LightTooltTip__     
        Modified MaterialUi Tooltip

2. __MiniDrawer__ 
    * _Child Components_
        * Logout

3. __SlideDownAnimation__
    * _props_
        * From parent
            * isVisible, children, forceSlideIn, width 

4. __Spinner__  
    Spinner while Loading

5. __StyledBadge__  
        Modified MaterailUI Badge



### store (Redux store)
1. __configureStore.js__ (configuring store)
    * Middlewares
        1. thunk (redux-thunk)

2. __actions__ (redux actions)
    * users.js (user actions)
    * index.js (export all actions)
    * auth.js (auth actions)

3. __reducers__ (redux reducer functions & store)
    * users.js (user reducers)
    * index.js (combine all reducers)
    * auth.js (auth reducers)


### actions (Redux actions)  
1. __auth.js__  
    * _actions_
        * requestLogin 
        * receiveLogin   
            payload: user
        * loginError     
        * requestLogout 
        * receiveLogout 
        * logoutError  
        * verifyRequest
        * verifySuccess  
        * requestSignup  
        * signUpSuccess       
            payload: user
        * signUpError
    * _actionCreators_
        * setUserdetails  =>  
            * params - user, userDetails
            * dispatch - signUpSuccess(on success), signUpError(on error)
        * loginUser  =>  
            * params - email, password
            * dispatch - requesetLogin, receiveLogin(on success), loginError(on error)
        * logoutUser  =>  
            * dispatch - requesetLogout, receiveLogout(on success), logoutError(on error)
        * verifyAuth =>  
            * dispatch - receiveLogin (on success)
        * signupUser  =>  
            * params - email, password, userDetails(optional)
            * dispatch - requesetSignup, setUserDetails(on success), signUpError(on error)

        
2. __users.js__
     * _actions_
        * setClients  
            payload: clients
        * setTotalUsers  
            payload: users
        * setOfflineusers  
        * setCurrentlyViewedUser  
            payload: user
        * clearAvatarData  
    * _actionCreators_
         * setTotalClients  =>    
            * params - clients
            * dispatch - setClients, setOfflineUsers
        * getTotalUser  =>  
            * dispatch - setTotalUsersm , setOfflineUsers
        * getAvatarData =>  
            * params  - clientEmail
            * dispatch -  setCurrentlyViewedUser

### reducers (Redux reducers )
1. __users.js__
    * state : 
        * totalClients (total Online clients)
        * totalUsers (total users in database)
        * offlineUsers (currently offline users)
        * userDetails (user details object)
2. __auth.js__
    * state :  
        * isLoggingIn (whether user is authenticating)
        * isLoggingOut (in process of loggin out)
        * isVerifying ( whether user is being verified)
        * loginError (error returned during login ) 
        * logoutError (error during logout)
        * isAuthenticated (whether user is authenticated)
        * signupError (error during signup)
        * signupErrMessage (message during signup error)
        * user (user object received after login or signup)











<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify -->
