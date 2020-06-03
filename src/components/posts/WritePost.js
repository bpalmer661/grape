import React, { Component } from 'react'

////////////////////////////////
import { connect } from 'react-redux'
import { createPost } from '../../store/actions/postActions'
////////////////////////////////


class WritePost extends Component {

state = {
title:'',
content:'',
}



handleChange = (e) => {
    this.setState({
[e.target.id]: e.target.value
    })
}


handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.props)
    /////////////////////////////////
    this.props.sendPost(this.state)

    ////////////////////////////////////////
}



    render() {
        return (
            <div className="container">

                <form onSubmit={this.handleSubmit} className="white">

                  <h5 className={"grey-text-darken-3"}>Write Post</h5>

             <div className={"input-field"}>
            <label htmlFor="title">Title </label>
            <input type="text" id="title" onChange={this.handleChange}/>
            </div>

   


            <div className={"input-field"}>
            <label htmlFor="content">Post Content </label>
            <textarea id="content" className={"materialize-textarea"} onChange={this.handleChange}></textarea>
            </div>

            

            <div className={"input-field"}>
           <button className={"btn blue lighten-1 z-depth-0"}>Post</button>
            </div>


                </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        sendPost: (post) => dispatch(createPost(post)),
    }
}


//////////first parameter is null as it is reserved for mapStateToProps//////////
export default connect(null,mapDispatchToProps)(WritePost)
