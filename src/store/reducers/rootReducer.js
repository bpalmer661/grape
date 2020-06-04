import authReducer from './authReducer'
import postReducer from './postReducer'
import { combineReducers } from 'redux'

//////////////////////////////////
// this is a pre-made reducer that is made to sync
// our firestore data with our state in the background 
// this reducer is linked to our firebase project and firestore database as
// we passed in our firebase config to our store in the index.js file
import { firestoreReducer } from 'redux-firestore'
////////////////////////////////

const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,
    //////////////////////////
    firestore: firestoreReducer
    /////////////////////////
});



export default rootReducer