import {useState, useEffect, React} from 'react'

const Rooms = () => {
  let [rooms, setRooms] = useState([])

    useEffect(() => {
        getRooms()
    }, [])

    let getRooms = async () => {
        let response = await fetch('/api/rooms/')
        let data = await response.json()
        setRooms(data)
    }

  return (
    <main>
        <h1>Rooms</h1>
        <ol>
          {rooms.map(item => <li><a href={`rooms/${item.id}`}>{item.name}</a></li>)}
        </ol>
    </main>
  )
}

export default Rooms