import { useEffect } from 'react'
import Navbar from '../components/Navbar'


const CreateRoom = (props) => {

    useEffect(() => {
        props.getUsers() 
        props.getTopics() 
    },[])


  return (
    <>
        <Navbar />
        <main>
            <div>
                <label htmlFor="host">Host: </label>
                <select name="host" id="">
                    {props.userList.map( h => <option value={h.id}>{h.username}</option>)}
                </select>
            </div>
        </main>
    </>
  )
}

export default CreateRoom