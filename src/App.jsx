import { useState } from "react"
import Home from "./pages/Home"
import Room from "./pages/Room"
import CreateRoom from "./pages/CreateRoom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() { 
    const [rooms, setRooms] = useState([])
    const [hostList, setHostList] = useState([]);
    const [topics, setTopics] = useState([]);


    let getRooms = async () => {
      let response = await fetch('/api/rooms/')
      let data = await response.json()
      setRooms(data)
    }

    let getHosts = async () => {
      let response = await fetch('/api/rooms/')
      let data = await response.json()
      setHostList(data)
    }

    let getTopics = async () => {
      let response = await fetch('/api/topics/')
      let data = await response.json()
      setTopics(data)
    }


    return ( 
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home getRooms={getRooms} rooms={rooms}/>} />
            <Route path="rooms/:id" element={<Room getRooms={getRooms} rooms={rooms}/>} />
            <Route path="create-room" element={
              <CreateRoom 
                getHosts={getHosts} 
                hostList={hostList}
                getTopics={getTopics}
                topics={topics}/>
            } />

        </Routes>
      </BrowserRouter>
    )
}

export default App;