import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import Navbar from '../../../components/dashboard/Navbar'
import SidebarBlue from '../../../components/dashboard/SidebarBlue'
import SidebarWhite from '../../../components/dashboard/SidebarWhite'
import ContentDashboardCar from '../../../components/dashboard/ContentDashboardCar'

export default function Medium() {
  const { isLoggedIn, user } = useSelector(state => state.auth)

  if (isLoggedIn) {
    if (!user.roles.includes('ROLE_ADMIN')) {
      return <Navigate to='/unauthorize' />
    }
  }
  else {
    return <Navigate to='/unauthorize' />
  }

  return (
    <div>
      <div className='flex max-h-screen'>
        <SidebarBlue isCars />
        <div className='flex-1'>
          <Navbar />
          <div className='flex max-h-full'>
            <SidebarWhite />
            <ContentDashboardCar isMedium />
          </div>
        </div>
      </div>
    </div>
  )
}