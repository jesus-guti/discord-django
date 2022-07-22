import React from 'react'
import RoomsSection from '../components/RoomsSection'

const Home = (props) => {
  return (
    <>
     <RoomsSection getRooms={props.getRooms} rooms={props.rooms}/> 
    </>
  )
}

export default Home