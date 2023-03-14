import React from 'react'
import VideoMenu from './VideoMenu'
import VideosContainer from './VideosContainer'

const Videos = () => {
  return (
    <div className='flex flex-col w-[1300px] mt-5'>

      <VideoMenu/>
      <VideosContainer/>

    </div>
  )
}

export default Videos