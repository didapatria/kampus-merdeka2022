import { FiHome, FiTruck } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function SidebarBlue(props) {
  return (
    <div className='w-20 bg-primary text-white text-xs'>
      <div className='bg-primary-3 w-9 h-9 mx-auto my-5' />
      <div className={`${props.isDashboard ? 'bg-[#ffffff4d]' : null} py-2`}>
        <FiHome className='mx-auto stroke-white w-6 h-6' />
        <Link to='/dashboard' className='flex justify-center py-1'>Dashboard</Link>
      </div>
      <div className={`${props.isCars ? 'bg-[#ffffff4d]' : null} py-2`}>
        <FiTruck className='mx-auto stroke-white w-6 h-6' />
        <Link to='/dashboard/car' className='flex justify-center py-1'>Cars</Link>
      </div>
    </div>
  )
}
