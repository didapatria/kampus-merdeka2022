import { FiMenu, FiSearch } from 'react-icons/fi'
import Dropdowns from './Dropdowns'

export default function Navbar() {
  return (
    <div className='fixed w-full z-10 flex drop-shadow py-4 bg-white items-center pr-20'>
      <div className='w-56 ba-navbar-left px-6'>
        <div className='bg-gray-200 h-8 w-24'></div>
      </div>
      <div className='flex-1 flex justify-between px-6'>
        <div className='self-center'>
          <FiMenu className='w-5 h-5' />
        </div>
        <div className='flex space-x-4'>
          <div className='flex'>
            <div className='relative'>
              <FiSearch className='absolute left-3 top-2 mt-1 stroke-neutral-400' />
              <input type='search' placeholder='Search' className='border pl-9 py-2 rounded' />
            </div>
            <button className='bg-white font-bold text-blue-900 hover:bg-blue-900 hover:text-white hover:shadow-lg hover:shadow-blue-900/50 border px-3 py-2 rounded border-blue-900'>Search</button>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='h-9 w-9 object-cover rounded-full bg-primary-3' />
            <div className=''>
              <Dropdowns />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
