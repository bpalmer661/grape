import React from 'react';


const PostSummary = ({post}) => {

return (

    <div className="card z-depth-0 post-summary">
    <div className="card-content grey-text text-darken-2">
<span className="card-title z-depth-0 post-summary">
{post.title}
</span>

<p>Posted By {post.username}</p>

{/* //////////////////////////////////// */}
<p className="grey-text">Posted by Ben</p>
{/* //////////////////////////////////// */}
</div>
    </div>
)
}


export default PostSummary