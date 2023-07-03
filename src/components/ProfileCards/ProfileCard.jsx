import React from 'react'
import './ProfileCard.css'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'

const ProfileCard = () => {
  return (
    <div className='ProfileCard'>
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span>Anushka Sharma</span>
        <span>Senior UI/UX Designer</span>
      </div>

      
      <div className="followStatus">
            <hr />
            
            <div className="follow">
                <span>6,475</span>
                <span>Followers</span>
            </div>

            <div className="vl"></div>

            <div className="follow">
                <span>26</span>
                <span>Following</span>
            </div>

            <span className="prof">My Profile</span>

        </div>
    </div>
  )
}

export default ProfileCard
