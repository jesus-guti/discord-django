import { React, useEffect, useState} from 'react'
import { useParams } from "react-router-dom";

const Room = () => {
    let params = useParams();
     const [room, setRoom] = useState({
      "topic":{"name": ""},
      "host":{"username": ""}
    })

    let getRoom = async () => {
        let response = await fetch(`/api/rooms/${params.id}/`, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        setRoom(await response.json())
      }
      console.log(room)
      useEffect(() => {
        getRoom();
      },[])

      return (
        <div>
            <h5>{room.topic.name}</h5>
            <h5>{room.name}</h5>
            <small>@{room.host.username}</small>
        </div>
      )
}

export default Room