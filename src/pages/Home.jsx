import React from 'react'
import RoomsSection from '../components/RoomsSection'

const Home = (props) => {
  return (
    <div className='flex flex-col items-center w-main'>
     <RoomsSection getRooms={props.getRooms} rooms={props.rooms}/> 
    </div>
  )
}

export default Home