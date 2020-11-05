import React, { Component } from 'react';
import first from './Static/first.jpg';
import './HomePage.css';
import AuthService from './Authtentication/AuthService';

 class HomePage extends Component {
   constructor(props){
     super(props);
     this.state = {
       blogs: []
     }
     this.refreshBlogs = this.refreshBlogs.bind(this)
    }
    componentDidMount(){
      this.refreshBlogs();
        console.log(this.state)
    }
     refreshBlogs(){
        AuthService.retreiveAllBlogs()
         .then(response => {
           this.setState({blogs:response.data})
         }).catch(err => console.log('err', err));

     }
   
render(){
    return (
      <div className="container ml-4">
      {
        this.state.blogs.map(
        blog=>

        
        
     <div className="container-fluid mainDiv" key={blog.postId}>
       <div className="container-fluid Media1" >
        <div className='authorDetails'>
                <img src={first} className="rounded" width="20px" height="20px" alt={blog.user.userName}/>
                <h6>{'@'+blog.user.userName}</h6>
          </div>
        <h4 className="font-weight-bold ">{blog.postTitle}</h4>
        <p className="text-wrap text-muted">{blog.postSubtitle} </p>
        <h6 className="text-muted">{blog.createDate}</h6>
      </div>
       <div className="container-fluid pt-2">
              <img src={first}  width="172px" height="129px"alt="illmage"/>
        </div>     
        
       
      </div>
 
      )}
      </div>
    )
}
}

export default HomePage
