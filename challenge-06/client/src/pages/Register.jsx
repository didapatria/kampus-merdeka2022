import React from 'react'
import FormRegister from '../components/FormRegister'

export default function Register() {
  return (
    <div className="block">
      <div className='flex min-h-screen w-full'>
        <div className="w-1/2 flex items-center justify-center">
          <FormRegister />
        </div>
        <div className="w-1/2 bg-blue-700">kanan</div>
      </div>
    </div>

  )
}
