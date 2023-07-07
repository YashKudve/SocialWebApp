import React from 'react'
import './RightSide.css'
import Home from "../../img/home.png"
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import {UilBell} from '@iconscout/react-unicons'
import {UilComment} from '@iconscout/react-unicons'
import {UilHome} from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGear } from '@fortawesome/free-solid-svg-icons'


const RightSide = () => {
  return (
    <div className='RightSide'>
      <div className="navIcons">
        <UilHome/>
        <UilSetting />
        <UilBell/>
        <UilComment/>
      </div>
      
      <TrendCard/>

      <button className='button r-button'>Share</button>
    </div>
  ) 
}

export default RightSide
