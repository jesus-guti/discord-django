import React from 'react'
import Navbar from '../components/Navbar'
import RoomsSection from '../components/RoomsSection'

const Home = (props) => {
  return (
    <>
     <Navbar />
     <RoomsSection getRooms={props.getRooms} rooms={props.rooms}/> 
    </>
  )
}

export default Home