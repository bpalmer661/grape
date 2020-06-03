import React from 'react';


const PostSummary = ({post}) => {
return (

    <div className="card z-depth-0 post-summary">
    <div className="card-content grey-text text-darken-2">
<span className="card-title z-depth-0 post-summary">
{post.title}
</span>
<p>Posted By {post.author}</p>
<p className="grey-text">20th May 2020</p>
</div>
    </div>
)
}


export default PostSummary