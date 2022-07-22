import { useEffect } from 'react'

const Rooms = (props) => {

    useEffect(() => {
        props.getRooms()
    }, [])

  return (
    <section className='px-4 py-6 w-[600px] flex flex-col gap-4'>
      <div className='flex'>
        <div className='ml-0 mr-auto'>
          <h2 className=' text-base uppercase text-white'>Rooms</h2>
          <p className=' text-color-dark'>{props.rooms.length} Rooms availible</p>
        </div>
        <div className='flex cursor-pointer items-center bg-color-main w-32 rounded-md px-3 py-2 text-color-bg'>Create Room</div>
      </div>
        <a href="" className='text-color-main'>All rooms</a>
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
    </section>
  )
}

export default Rooms