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
        <section className='w-[650px] rounded-xl bg-color-dark h-fit my-auto'>
            <div className='bg-color-dark-light h-14 flex items-center overflow-hidden rounded-t-xl px-4'>
                <h3 className='uppercase text-color-light'>Create/Update study room</h3>
            </div>
            <div className='p-8 flex flex-col gap-4'>
                <div>
                    <label htmlFor="host" className='block text-color-light-gray'>Host: </label>
                    <select name="host" id="" onChange={handleRoomForm}>
                        <option value=""> -- Select --</option>
                        {props.userList.map( user => <option value={user.id}>{user.username}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="topic" className='block text-color-light-gray'>Topic: </label>
                    <select name="topic" id="" onChange={handleRoomForm}>
                        <option value=""> -- Select --</option>
                        {props.topics.map( topic => <option value={topic.id}>{topic.name}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="name" className='block text-color-light-gray'>Name: </label>
                    <input className='' 
                        type="text" name="name" id="" onChange={handleRoomForm} value={roomForm.name}/>
                </div>
                <div>
                    <label htmlFor="description" className='block text-color-light-gray'>Description</label>
                    <textarea className='block' name="description" id="" cols="30" rows="10" onChange={handleRoomForm}>{roomForm.description}</textarea>
                </div>
                <div className='flex gap-3'>
                    <a href="/" className='ml-auto basic-btn bg-color-dark-light text-color-light'>Cancel</a>
                    <button onClick={handleSubmit} className="mr-0 basic-btn bg-color-main text-color-dark" >Create Room</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default CreateRoom