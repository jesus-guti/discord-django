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
          <p className=' text-color-dark-light'>{props.rooms.length} Rooms availible</p>
        </div>
        <div className='flex cursor-pointer items-center bg-color-main w-32 rounded-md px-3 py-2 text-color-bg'>Create Room</div>
      </div>
        <a href="" className='text-color-main'>All rooms</a>
        <div className='flex flex-col gap-5'>
          {props.rooms.map(item => {
            return (
            <div className='flex flex-col gap-4 bg-color-dark rounded-xl p-5'>
              <div className='flex items-center'>
                <img src="/src/assets/user.png" alt="user icon" className='mr-2 w-min h-min rounded-full border-[#71c6dd] border-2 ' />
                <span className='text-color-main ml-0 mr-auto'>Host @{item.host.username}</span>
                <span className='text-color-light-gray'>6 months, 3 weeks ago</span>
              </div>
              <a className='text-2xl text-color-main-light ' href={`rooms/${item.id}`}>{item.name}</a>
              <hr className='border-t-[#51546e]'/>
              <div className='flex'>
                <div className='flex items-center'><img src="/src/assets/group.png" alt="" className='mr-2' /><span className='text-color-light-gray text-sm'>0 Joined</span></div>
                <small className='ml-auto mr-0 rounded-xl py-1 px-3 bg-color-dark-medium text-color-light-gray'>{item.topic.name}</small>
              </div>
            </div>)
          })
}
        </div>
    </section>
  )
}

export default Rooms