import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { getCsrfToken } from '../components/CSRFToken'

const CreateRoom = (props) => {

    const [roomForm, setRoomForm] = useState(
        {
            host: '', 
            topic: '', 
            name: '', 
            description: '', 
        }
    )

    function handleRoomForm(event) {
        setRoomForm(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    
    async function handleSubmit(event){
        event.preventDefault()
        fetch('/api/rooms/', {
            method: 'POST',
            body: roomForm,
            headers: {
                'Content-type': 'application/json',
                'X-CSRFToken': await getCsrfToken()
            },
            credentials: 'include',
        })
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    }
    
    
    
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
                <select name="host" id="" onChange={handleRoomForm}>
                    <option value=""> -- Select --</option>
                    {props.userList.map( user => <option value={user.id}>{user.username}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="topic">Topic: </label>
                <select name="topic" id="" onChange={handleRoomForm}>
                    <option value=""> -- Select --</option>
                    {props.topics.map( topic => <option value={topic.id}>{topic.name}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="" onChange={handleRoomForm} value={roomForm.name}/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea className='block' name="description" id="" cols="30" rows="10" onChange={handleRoomForm}>{roomForm.description}</textarea>
            </div>
            <button onClick={handleSubmit}>Create Room</button>
        </main>
    </>
  )
}

export default CreateRoom