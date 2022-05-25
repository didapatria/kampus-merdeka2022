export default function SidebarWhite(props) {
  return (
    <div className='mt-16 w-56 ba-sidebar bg-white'>
        <ul className='mt-5 font-bold text-sm'>
          <li className='px-6 py-3 text-neutral-400 uppercase'>
            <span>
              {props.isDashboard ? 'dashboard' : 'cars' }
            </span>
          </li>
          <li className='px-6 py-3 bg-primary-3 capitalize'>
            <span>{props.isDashboard ? 'dashboard' : 'list car' }</span>
          </li>
        </ul>
    </div>
  )
}
