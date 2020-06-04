

const initState = {
posts: [
    {id: "1",title:"Just Got Paid",content:"Going Shopping",author:"BenCodes"},
    {id: "2",title:"Lost All My Money",content:"Black Jack",author:"BenCodes"},
    {id: "3",title:"New SurfBoard",content:"Then I broke it",author:"BenCodes"},
    {id: "4",title:"New Car",content:"Leather With Sunroof",author:"BenCodes"},
]
}



const postReducer = (state = initState, action) => {

switch(action.type){
    case 'CREATE_POST':
    console.log("Post Created",action.post)
    return state;
    ////////////////////////////////////////////
    case 'CREATE_POST_ERROR':
        console.log('create post error',action.err);
        return state;
     default:
    return state;
}
}
//////////////////////////////////

export default postReducer