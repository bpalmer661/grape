import React, { Component } from 'react';
import './MyProfileStyles.css';
import { storage } from 'firebase';
import { connect } from 'react-redux'


///////////lesson #35 ////////////////////////////

import { uploadImage } from '../../store/actions/authActions';
import FileField from '../components/layout/fileField';


///////////lesson #35 ////////////////////////////


class MyProfile extends Component {




handleImageChange = (event) => {
    if(event.target.files[0]){
    const image = event.target.files[0];
   
    const formData = new FormData();
    formData.append('image',image,image.name);
    this.props.uploadImage(formData);
    }
}

handleEditPicture = () => {
    const fileInput = document.getElementById('imageUpload');
    fileInput.click();
}




render() {

    return (

        <div Name="MyProfileStyles">
       
       <div className="col s18 m9">
          <div className="card">

            <div className="card-image">
             <img className="image" src="https://static.vibe.com/files/2018/05/tekashi-69-1526922120-compressed.jpg"/>
          <span className="card-title">69</span> 

         <button onClick={this.handleEditPicture} className="btn-floating halfway-fab waves-effect waves-light red">+</button>
            </div>

            <input hidden="hidden" type="file" id="imageUpload" onChange={this.handleImageChange}/>

            <div className="card-content">
              <p>I'm 69 follow me on instagram</p>


            </div>


            <div className="card-action">
              <a href="#">This is a link</a>
            </div> 

          </div>
        </div>

<FileField/>

      </div>

      
)
}
}


/////////////////LESSON #35////////////////////
const mapStateToProps = (state) => {
    return{
      authError: state.auth.authError,
      auth: state.firebase.auth,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        uploadImage: (formData) => dispatch(uploadImage(formData))

    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(MyProfile)
  

/////////////////LESSON #35////////////////////
  