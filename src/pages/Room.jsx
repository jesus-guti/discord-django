import { React, useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import Navbar from '../components/Navbar';

const Room = () => {
    let params = useParams();
    const [room, setRoom] = useState({})

    let getRoom = async () => {
        let response = await fetch(`/api/rooms/${params.id}`)
        let data = await response.json()
        setRoom(data)
      }

      useEffect(() => {
        getRoom();
      },[])

      return (
        <div>
          <Navbar />
          <main>
            <h5>{room.topic.name}</h5>
          </main>
        </div>
      )
}

export default Room