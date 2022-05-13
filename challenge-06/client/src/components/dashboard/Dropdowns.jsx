/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useCallback, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import { logout } from '../../actions/auth'
import { clearMessage } from '../../actions/message'

import { history } from '../../helpers/history'

import EventBus from '../../common/EventBus'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FiHome, FiLogOut } from 'react-icons/fi'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdowns() {
  const { isLoggedIn, user } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()) // clear message when changing location
    })
  }, [dispatch])

  const logOut = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  useEffect(() => {
    EventBus.on('logout', () => {
      logOut()
    })

    return () => {
      EventBus.remove('logout')
    }
  }, [logOut])

  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex justify-center w-full rounded-md px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'>
          {user.fullname}
          <ChevronDownIcon className='mx-4 h-5 w-5' aria-hidden='true' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='origin-top-right absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none'>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to='/'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <div className='flex items-center'>
                    <FiHome className='mr-3' />
                    Home
                  </div>
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='/'
                  className={classNames(
                    active ? 'bg-primary-3 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                  onClick={logOut}
                >
                  <div className='flex items-center'>
                    <FiLogOut className='mr-3' />
                    LogOut
                  </div>
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
