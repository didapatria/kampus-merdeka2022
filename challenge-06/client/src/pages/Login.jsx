import React from 'react'
import FormLogin from '../components/FormLogin'

export default function Login() {
  return (
    <div className="block">
      <div className='md:flex md:min-h-screen w-full'>
        <div className="md:w-3/5 flex" style={{background: 'url(./img/bg_auth.png) no-repeat', backgroundSize: 'cover'}}>
        </div>
        <div className="md:w-2/5 flex items-center justify-center">
          <FormLogin />
        </div>
      </div>
    </div>
  )
}
