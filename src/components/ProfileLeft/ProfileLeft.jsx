import React from 'react'
import './ProfileLeft.css'
import LogoSearch from './../LogoSearch/LogoSearch';
import FollowersCards from './../FollowersCard/FollowersCards';
import InfoCard from '../InfoCard/InfoCard';

const ProfileLeft = () => {
  return (
    <div className='ProfileLeft'>
      <LogoSearch/>
      <InfoCard/>
      <FollowersCards/>
    </div>
  )
}

export default ProfileLeft
