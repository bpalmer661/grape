import React from 'react'


const PostDetails = (props) => {
console.log(props)

const id = props.match.params.id
    return (
        <div className="container section post-details">
            <div className="card z-depth-0">
            <div className="card-content">

            <span className="card-title">Post Title {id}: Coffee and Burn</span>
            
<p> Today I went to get a coffee and then did a work out #tired #dailyGrind</p>
<div className="card-content grey lighten-4 grey-text">
<div> Posted By BenCodes </div>
    <div> 27th May 2020 </div>
    <div> Australia </div>
     </div>
    </div>
    </div>
    </div>
    )
}

export default PostDetails