




export const createPost = (post) => {

return (dispatch,getState,{ getFirebase, getFirestore }) => {
    
   const firestore = getFirestore();

   firestore.collection('posts').add({
       ...post,
    username: "BenCodes",
    createdAt: new Date(),
   }).then(() => {
    dispatch({type: 'CREATE_POST', post: post });
   }).catch((err) => {
    dispatch({type: 'CREATE_POST_ERROR', err });
   })
}
};
