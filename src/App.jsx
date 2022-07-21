import React from "react"
import Home from "./pages/Home"
import Room from "./pages/Room"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CreateRoom from "./pages/CreateRoom";

function App() { 
    const [rooms, setRooms] = useState({})
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
            <Route exact path="/" element={<Home />} />
            <Route path="rooms" element={<Room />}>
              <Route path=":id" element={<Room getRooms={getRooms} rooms={rooms}/>} />
            </Route>
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