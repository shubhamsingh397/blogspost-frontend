import React, { useEffect, useState } from 'react';
import './HomePage.css';
import AuthService from './Authtentication/AuthService';
import first from './Static/first.jpg';

const Trending = () => {

    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        AuthService.retreiveAllBlogs()
        .then(response => {
          setBlogs(response.data)
        }).catch(err => console.log('err', err));
    },[])
    return(
        <div className="trendingMain container-fluid">
            <h6 className='font-weight-bolder ' >TRENDING ON BLOGPOST</h6>
            <div className="trending container-fluid">
                
            {
                
                blogs.map(
                    blog=>
                    <div className=" trendingMedia" key={blog.postId} >
                            <div className='authorDetails'>
                                <img src={first} className="rounded" width="20px" height="20px" alt={blog.user.userName}/>
                                <h6>{'@'+blog.user.userName}</h6>
                            </div>
                            <h4 className="font-weight-bold ">{blog.postTitle}</h4>
                            <p className="text-wrap text-muted">{blog.postSubtitle} </p>
                            <h6 className="text-muted">{blog.createDate}</h6>
                        </div>
                )
            }
            </div>
        </div>
    )
}
export default Trending;