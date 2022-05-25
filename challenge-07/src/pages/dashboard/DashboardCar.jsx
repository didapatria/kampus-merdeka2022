import Navbar from '../../components/dashboard/Navbar'
import SidebarBlue from '../../components/dashboard/SidebarBlue'
import SidebarWhite from '../../components/dashboard/SidebarWhite'
import ContentDashboardCar from '../../components/dashboard/ContentDashboardCar'

export default function DashboardCar() {
  return (
    <div>
      <div className='flex max-h-screen'>
        <SidebarBlue isCars />
        <div className='flex-1'>
          <Navbar />
          <div className='flex max-h-full'>
            <SidebarWhite />
            <ContentDashboardCar />
          </div>
        </div>
      </div>
    </div>
  )
}