




export const createPost = (post) => {

return (dispatch,getState,{ getFirebase, getFirestore }) => {
    
   const firestore = getFirestore();


const profile = getState().firebase.profile
const userId = getState().firebase.auth.uid


   firestore.collection('posts').add({
       ...post,
   
    username: profile.username,
    userId: userId,
    
    createdAt: new Date(),
   }).then(() => {
    dispatch({type: 'CREATE_POST', post: post });
   }).catch((err) => {
    dispatch({type: 'CREATE_POST_ERROR', err });
   })
}
};
