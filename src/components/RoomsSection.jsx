import { useEffect } from 'react'

const Rooms = (props) => {

    useEffect(() => {
        props.getRooms()
    }, [])

  return (
    <main>
        <h1 className='text-3xl'>Rooms</h1>
        <ol className='mb-4'>
          {props.rooms.map(item => {
            return (
            <li className='flex flex-col gap-6'>
              <p>@{item.host.username}</p>
              <a className='text-2xl' href={`rooms/${item.id}`}>{item.name}</a>
              <small>{item.topic.name}</small>
              <hr />
            </li>)
          })
}
        </ol>
    </main>
  )
}

export default Rooms