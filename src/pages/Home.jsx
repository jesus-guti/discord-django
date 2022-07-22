import React from 'react'
import RoomsSection from '../components/RoomsSection'

const Home = (props) => {
  return (
    <div className='flex w-[1200px]'>
      <RoomsSection getRooms={props.getRooms} rooms={props.rooms}/> 
    </div>
  )
}

export default Home