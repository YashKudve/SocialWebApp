import React from 'react'
import './Home.css'
import ProfileSide from './../../components/profileSide/ProfileSide';
import PostSide from './../../components/PostSide/PostSide';

const Home = () => {
  return (
    <div className='Home'>
        {/* <div className="profileSide">Profile</div>       */}
        <ProfileSide/>
        <PostSide />
        {/* <div className="postSide">Posts</div>       */}
        <div className="rightSide">Right</div>      
    </div>
  )
}

export default Home
