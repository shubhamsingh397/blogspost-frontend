import React, { useEffect, useState } from 'react';
import AuthService from './Authtentication/AuthService';
import first from './Static/first.jpg';
const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        AuthService.retreiveAllBlogs()
        .then(response => {
          setBlogs(response.data)
        }).catch(err => console.log('err', err));
    },[])


    return(
        <div className="container mainDiv1">
        {
          blogs.map(
          blog=>
            <div className="mainDiv container" key={blog.postId}>
            <div className="Media1 container" >
            <div className='authorDetails'>
                  <img src={first} className="rounded" width="20px" height="20px" alt={blog.user.userName}/>
                  <h6>{'@'+blog.user.userName}</h6>
            </div>
            <h4 className="font-weight-bold ">{blog.postTitle}</h4>
            <p className="text-wrap text-muted">{blog.postSubtitle} </p>
            <h6 className="text-muted">{blog.createDate}</h6>
          </div>
         <div className="postImage">
                <img src={first}  width="172px" height="129px"alt="illmage"/>
          </div>
          
         
        </div>
   
        )}
        </div>
    )
}
export default Blogs;