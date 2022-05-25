import Navbar from '../../components/dashboard/Navbar'
import SidebarBlue from '../../components/dashboard/SidebarBlue'
import SidebarWhite from '../../components/dashboard/SidebarWhite'
import ContentDashboard from '../../components/dashboard/ContentDashboard'

export default function Dashboard() {
  return (
    <div>
      <div className='flex max-h-screen'>
        <SidebarBlue isDashboard />
        <div className='flex-1'>
          <Navbar />
          <div className='flex max-h-full'>
            <SidebarWhite isDashboard />
            <ContentDashboard />
          </div>
        </div>
      </div>
    </div>
  )
}
