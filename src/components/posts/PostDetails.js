import React from 'react'
import { connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'



const PostDetails = (props) => {

console.log(props)

const { post } = props;

if (post ){
return(
<div className="container section post-details">
            <div className="card z-depth-0">
            <div className="card-content">

            <span className="card-title">{post.title}</span>
            
<p> {post.content}</p>
<div className="card-content grey lighten-4 grey-text">
<div> Posted By {post.username} </div>
    <div> 27th May 2020 </div>
    <div> Australia </div>
     </div>
    </div>
    </div>
    </div>
)
} else {

    return (
        <div>Loading Post....</div>
    )
}
}
  


const mapStateToProps = (state, componentProps) => {

const id = componentProps.match.params.id;

const posts = state.firestore.data.posts;
const post = posts ? posts[id] : null
    return {
post: post
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'posts' }
    ])
)(PostDetails)