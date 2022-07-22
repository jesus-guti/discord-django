import { useEffect } from 'react'
import userIcon from '../assets/images/user.png'
import groupIcon from '../assets/images/group.png'

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
        <a href="/create-room" className='basic-btn bg-color-main w-32 text-color-bg'>Create Room</a>
      </div>
        <a href="" className='text-color-main'>All rooms</a>
        <div className='flex flex-col gap-5'>
          {props.rooms.map(item => {
            return (
            <div className='flex flex-col gap-4 bg-color-dark rounded-xl p-5'>
              <div className='flex items-center'>
                <img src={userIcon} alt="user icon" className='mr-2 w-min h-min rounded-full border-[#71c6dd] border-2 ' />
                <span className='text-color-main ml-0 mr-auto'>Host @{item.host.username}</span>
                <span className='text-color-light-gray'>6 months, 3 weeks ago</span>
              </div>
              <a className='text-2xl text-color-main-light ' href={`rooms/${item.id}`}>{item.name}</a>
              <hr className='border-t-[#51546e]'/>
              <div className='flex'>
                <div className='flex items-center'><img src={groupIcon} alt="" className='mr-2' /><span className='text-color-light-gray text-sm'>0 Joined</span></div>
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