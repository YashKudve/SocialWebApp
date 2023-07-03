import React from 'react'
import './Posts.css'
import { PostsData } from '../../Data/PostData'
import Post from '../Post/Post'

const Posts = () => {
  return (
    <div>
      {PostsData.map((post,id)=>{
        return <Post data={post} id={id}/>
      })}
    </div>
  )
}

export default Posts
