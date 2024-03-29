import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Main from './Main'
import Hero from './Hero'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Our Services', href: '#our-services' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Testimonial', href: '#testimonial' },
  { name: 'FAQ', href: '#faq' },
]

export default function Navbar(props) {
  return (
    <div className={`relative bg-slate-100 ${props.isHome ? null : 'pb-12'} overflow-hidden`}>
      <div className='max-w-7xl mx-auto'>
        <div className='relative z-10 pb-8 lg:w-full lg:pb-28'>
          <Popover>
            <div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
              <nav className='relative flex items-center justify-between sm:h-10 lg:justify-start' aria-label='Global'>
                <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
                  <div className='flex items-center justify-between w-full md:w-auto'>
                    <a href='/'>
                      <span className='sr-only'>Workflow</span>
                      <div className='h-8 w-24 bg-blue-900' />
                    </a>
                    <div className='-mr-2 flex items-center md:hidden'>
                      <Popover.Button className='bg-blue-900 rounded-md p-2 inline-flex items-center justify-center hover:text-blue-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-900'>
                        <span className='sr-only'>Open main menu</span>
                        <MenuIcon className='h-6 w-6' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className='hidden md:block lg:ml-auto md:ml-10 md:pr-4 md:space-x-8'>
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className='font-medium text-gray-500 hover:text-gray-900'>
                      {item.name}
                    </a>
                  ))}
                  <Link
                    to = '/register'
                    className='bg-green-500 rounded-sm font-medium text-white hover:bg-white hover:text-green-500 hover:shadow-lg hover:shadow-green-500/50 md:px-3 md:py-2'
                  >
                    Register
                  </Link>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter='duration-150 ease-out'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='duration-100 ease-in'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Popover.Panel
                focus
                className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
              >
                <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
                  <div className='px-5 pt-4 flex items-center justify-between'>
                    <div>
                      <div className='h-8 w-24 bg-blue-900' />
                    </div>
                    <div className='-mr-2'>
                      <Popover.Button className='bg-blue-900 rounded-md p-2 inline-flex items-center justify-center hover:text-blue-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-900'>
                        <span className='sr-only'>Close main menu</span>
                        <XIcon className='h-6 w-6' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className='px-2 pt-2 pb-3 space-y-1'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <Link
                    to = '/register'
                    className='block w-full px-5 py-3 text-center font-medium text-white bg-green-500 hover:bg-green-600'
                  >
                    Register
                  </Link>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {props.isHome ? (<Main />) : null}
        </div>
      </div>
      {props.isHome ? (<Hero />) : null}
    </div>
  )
}


