import React, { Component } from 'react'

export class Register extends Component {

state = {
email:'',
password:'',
userName:'',
}



handleChange = (e) => {
    this.setState({
[e.target.id]: e.target.id
    })
}


handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    
}

    render() {
        return (
            <div className="container">

                <form onSubmit={this.handleSubmit} className="white">

                  <h5 className={"grey-text-darken-3"}>Registration Page</h5>

             <div className={"input-field"}>
            <label htmlFor="email">Email </label>
            <input type="email" id="email" onChange={this.handleChange}/>
            </div>

   


            <div className={"input-field"}>
            <label htmlFor="password">Password </label>
            <input type="password" id="password" onChange={this.handleChange}/>
            </div>

            <div className={"input-field"}>
            <label htmlFor="userName">User Name </label>
            <input type="text" id="userName" onChange={this.handleChange}/>
            </div>



            <div className={"input-field"}>
           <button className={"btn blue lighten-1 z-depth-0"}>Register</button>
            </div>


                </form>
            </div>
        )
    }
}


