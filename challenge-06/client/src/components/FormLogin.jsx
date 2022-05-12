import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'

import { login } from '../actions/auth'

import { Link, Navigate } from 'react-router-dom'

const required = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        This field is required!
      </div>
    )
  }
}

const FormLogin = (props) => {
  const form = useRef()
  const checkBtn = useRef()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const { isLoggedIn, user } = useSelector(state => state.auth)
  const { message } = useSelector(state => state.message)

  const dispatch = useDispatch()

  const onChangeEmail = (e) => {
    const email = e.target.value
    setEmail(email)
  }

  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }

  const handleLogin = (e) => {
    e.preventDefault()

    setLoading(true)

    form.current.validateAll()

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          props.history.push('/')
          window.location.reload()
        })
        .catch(() => {
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }

  if (isLoggedIn) {
    if (user.roles.includes('ROLE_ADMIN')) {
      return <Navigate to='/dashboard' />
    }
    return <Navigate to='/' />
  }

  return (
    <div className='md:w-96'>
      <a href='/'>
        <div className='h-8 w-24 bg-primary-3 mb-8' />
      </a>
      <h1 className='text-xl font-bold mb-5'>Welcome Back!</h1>
      <Form onSubmit={handleLogin} ref={form}>
        <div>
          <div className='space-y-4'>
            <div>
              <label htmlFor='email'>Email</label>
              <Input
                type='text'
                className='bg-white rounded border px-3 py-2 w-full'
                name='email'
                value={email}
                onChange={onChangeEmail}
                validations={[required]}
                placeholder='Contoh: johndee@gmail.com'
              />
            </div>

            <div>
              <label htmlFor='password'>Create Password</label>
              <Input
                type='password'
                className='bg-white rounded border px-3 py-2 w-full'
                name='password'
                value={password}
                onChange={onChangePassword}
                validations={[required]}
                placeholder='6+ karakter'
              />
            </div>
          </div>
          
          <div className='mt-8'>
            <button className='bg-primary text-white rounded px-5 py-2 w-full'>Sign In</button>
          </div>

          <div className='flex mt-8'>
            <p>Don’t have an account?</p>
            <Link to = '/register' className='font-medium text-primary pl-2'>Sign Up for free</Link>
          </div>
        </div>

        {message && (
            <div className='absolute top-5'>
              <div className='bg-red-600 text-white px-3 py-2' role='alert'>
                {message}
              </div>
            </div>
          )}
        <CheckButton style={{ display: 'none' }} ref={checkBtn} />
      </Form>
    </div>
  )
}

export default FormLogin
