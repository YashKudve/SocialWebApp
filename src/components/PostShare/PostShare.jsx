import React from 'react'
import './PostShare.css'
import ProfileImg from '../../img/profileImg.jpg'
import {UilScenery} from '@iconscout/react-unicons'
import {UilPlayCircle} from '@iconscout/react-unicons'
import {UilLocationPoint} from '@iconscout/react-unicons'
import {UilSchedule} from '@iconscout/react-unicons'
import {UilTimes} from '@iconscout/react-unicons'
import { useState, useRef} from 'react'


const PostShare = () => {

  const[image, setImage] = useState('none')
  const imgRef = useRef()

  const onImageChange = (event) =>{
    if(event.target.files && event.target.files[0]){
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  }

  return (
    <div className='PostShare'>
      <img src={ProfileImg} alt="Profile Image" />

      <div>
        <input type="text" placeholder="What's Happening?" />
          <div className="postOptions">

          <div className="option" style={{color:"var(--photo)"}} onClick={()=>imgRef.current.click()}><UilScenery /> Photo</div>
          <div className="option" style={{color:"var(--video)"}}><UilPlayCircle /> Video</div>
          <div className="option" style={{color:"var(--location)"}}><UilLocationPoint /> Location</div>
          <div className="option" style={{color:"var(--shedule)"}}><UilSchedule /> Schedule</div>
          <button className='button ps-button'>Share</button>

          <div style={{display:'none'}}>
            <input type="file" name='myImage' ref={imgRef} onChange={onImageChange}/>
          </div>

        </div>

        {/* if then stmt */}
        {/* if image is true then do the following */}

        {image && (
          <div className="previewImage">
            <UilTimes onClick={()=>setImage(null)}/>
            <img src={image.image} alt="" />
          </div>
        )}
      </div>

    </div>
  )
}

export default PostShare
