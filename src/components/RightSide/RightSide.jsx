import React from 'react'
import './RightSide.css'
import Home from "../../img/home.png"
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import {UilBell} from '@iconscout/react-unicons'
import {UilComment} from '@iconscout/react-unicons'
import {UilHome} from '@iconscout/react-unicons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGear } from '@fortawesome/free-solid-svg-icons'


const RightSide = () => {
  return (
    <div className='RightSide'>
      <div className="navIcons">
        {/* <img src={Home} alt="" /> */}
        <UilHome/>
        {/* <FontAwesomeIcon icon={faGear} /> */}
        <UilSetting />
        <UilBell/>
        <UilComment/>

        {/* <img src={Noti} alt="" /> */}
        {/* <img src={Comment } alt="" /> */}
      </div>
      
      <TrendCard/>
    </div>
  ) 
}

export default RightSide
