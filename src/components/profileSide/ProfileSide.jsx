import React from 'react'
import './ProfileSide.css'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCards/ProfileCard'
import FollowersCards from '../FollowersCard/FollowersCards'

const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
      <LogoSearch/>
      <ProfileCard/>
      <FollowersCards/>
    </div>
  )
}

export default ProfileSide
