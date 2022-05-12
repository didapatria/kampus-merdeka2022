import React, { useState, useEffect } from 'react'

import UserService from '../../services/user.service'
import EventBus from '../../common/EventBus'

export default function Dashboard() {
  const [content, setContent] = useState('');

  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()

        setContent(_content)

        if (error.response && error.response.status === 401) {
          EventBus.dispatch('logout');
        }
      }
    )
  }, [])

  return (
    <div>
      <div>{content}</div>
      <div className='flex drop-shadow py-4 px-8 bg-white'>
        <div className='w-56 ba-navbar-left'>
          <div className='bg-gray-200 h-8 w-24'></div>
        </div>
        <div className='flex-1 flex justify-between'>
          <div>
            burger
          </div>
          <div className='flex space-x-4'>
            <div>
              search
            </div>
            <div>
              login
            </div>
          </div>
        </div>
      </div>
      <div className='flex'>
        <div className='w-56 ba-sidebar bg-white'>
            <ul>
              <li className='p-4'>
                <span>icon</span>
                <span>Menu-1</span>
              </li>
              <li className='p-4'>
                <span>icon</span>
                <span>Menu-2</span>
              </li>
            </ul>
        </div>
        <div className='flex-1 bg-gray-100 min-h-screen p-8'>
          <div>
            Breadcrumb
          </div>
          <div className='my-8'>
            <h1 className='text-3xl font-bold'>Page Title</h1>
          </div>
          <div>
            <table className='w-full border border-primary-3'>
              <thead className='bg-primary-3'>
                <tr>
                  <th className='text-left p-2'>Song</th>
                  <th className='text-left p-2'>Artist</th>
                  <th className='text-left p-2'>Year</th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                <tr>
                  <td className='p-2 border-b border-gray-200'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                  <td className='p-2 border-b border-gray-200'>Malcolm Lockyer</td>
                  <td className='p-2 border-b border-gray-200'>1961</td>
                </tr>
                <tr>
                  <td className='p-2 border-b border-gray-200'>Witchy Woman</td>
                  <td className='p-2 border-b border-gray-200'>The Eagles</td>
                  <td className='p-2 border-b border-gray-200'>1972</td>
                </tr>
                <tr>
                  <td className='p-2 border-b border-gray-200'>Shining Star</td>
                  <td className='p-2 border-b border-gray-200'>Earth, Wind, and Fire</td>
                  <td className='p-2 border-b border-gray-200'>1975</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
