






export const createPost = (post) => {

return (dispatch,getState,{ getFirebase, getFirestore }) => {
    //make async call to  database / firestore by Google
    dispatch({type: 'CREATE_POST', post: post });

}
};