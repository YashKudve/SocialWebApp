import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'

const InfoCard = () => {
  return (
    <div className='InfoCard'>
      <div className="infoHead">
        <h4>Your Info</h4>

        <div>
        <UilPen width='2rem' height='1rem'/>
        </div>
        
      </div>

      <div className="info">
        <span>
            <b>Status </b>
        </span>
        <span>In Relationship</span>
      </div>

      <div className="info">
        <span>
            <b>Lives </b>
        </span>
        <span>In Mumbai</span>
      </div>

      <div className="info">
        <span>
            <b>Works at </b>
        </span>
        <span>TCS, Mumbai</span>
      </div>

      <button className='button logout-btn'>Logout</button>

    </div>
  )
}

export default InfoCard
