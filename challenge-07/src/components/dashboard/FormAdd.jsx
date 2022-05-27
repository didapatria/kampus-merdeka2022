import { useRef, useState } from 'react'
import { FiChevronRight, FiUpload } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'

const required = (value) => {
  if (!value) {
    return (
      <div className='text-xs text-gray-500 mt-1' role='alert'>
        This field is required!
      </div>
    )
  }
}

const vimage = (value) => {
  const fileSize = value.files[0].size / 1024 / 1024; // in MiB
  if (fileSize < 2) {
    return (
      <div className='text-xs text-gray-500 mt-1' role='alert'>
        File size max. 2MB
      </div>
    )
  }
}

export default function FormAdd() {
  const form = useRef()

  const [carName, setCarName] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  const onChangeCarName = (e) => {
    const carName = e.target.value
    setCarName(carName)
  }

  const onChangePrice = (e) => {
    const price = e.target.value
    setPrice(price)
  }

  const onChangeImage = (e) => {
    const image = e.target.value
    setImage(image)
  }

  const handlePostCar = (e) => {

  }
  return (
    <div className='mt-16 flex-1 bg-gray-100 p-8 overflow-y-scroll'>
      <div className='flex space-x-2 items-center text-xs'>
        <Link to='/dashboard/car' className='font-bold'>Cars</Link>
        <FiChevronRight />
        <Link to='/dashboard/car' className='font-bold'>List Car</Link>
        <FiChevronRight />
        <div>Add New Car</div>
      </div>
      <div className='my-6'>
        <h1 className='text-2xl font-bold'>Add New Car</h1>
      </div>
      <Form onSubmit={handlePostCar} ref={form}>
        <div className='bg-white rounded-sm p-4 space-y-4'>
          <div className='flex items-center space-x-2'>
            <label className='w-1/6'>Nama<span className='text-red-500'>*</span></label>
            <div className='w-1/3'>
              <Input
                type='text'
                className='w-full bg-white border border-gray-500 text-gray-500 rounded-sm px-3 py-2'
                name='name'
                value={carName}
                onChange={onChangeCarName}
                validations={[required]}
                placeholder='Placeholder'
              />
            </div>
          </div>
          <div className='flex items-center space-x-2'>
            <label className='w-1/6'>Harga<span className='text-red-500'>*</span></label>
            <div className='w-1/3'>
              <Input
                type='text'
                className='w-full bg-white border border-gray-500 text-gray-500 rounded-sm px-3 py-2'
                name='price'
                value={price}
                onChange={onChangePrice}
                validations={[required]}
                placeholder='Placeholder'
              />
            </div>
          </div>
          <div className='flex items-center space-x-2'>
            <label className='w-1/6'>Foto<span className='text-red-500'>*</span></label>
            <div className='w-1/3 space-y-4'>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 2MB</p>
                </div>
              </div>
              <div className='bg-white border border-gray-500 text-gray-500 rounded-sm px-3 py-2'>
                <div className='flex justify-between items-center'>
                  <Input
                    type='file'
                    name='price'
                    value={image}
                    onChange={onChangeImage}
                    validations={[required, vimage]}
                    placeholder='Placeholder'
                  />
                  <FiUpload />
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='w-1/6'>Start Rent</div>
            <div>-</div>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='w-1/6'>Finish Rent</div>
            <div>-</div>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='w-1/6'>Created at</div>
            <div>-</div>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='w-1/6'>Updated at</div>
            <div>-</div>
          </div>
        </div>
      </Form>
      <div className='flex space-x-4 mt-36'>
        <Link to='/dashboard/car' className='bg-white border border-primary rounded-sm font-bold text-primary px-3 py-2'>Cancel</Link>
        <div className='bg-primary rounded-sm font-bold text-white px-3 py-2'>Save</div>
      </div>
    </div>
  )
}
