import { FiChevronRight, FiUpload } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function FormAdd() {
  return (
    <div className='mt-16 flex-1 bg-gray-100 p-8 overflow-y-scroll'>
      <div className='flex space-x-2 items-center text-xs'>
        <div className='font-bold'>Cars</div>
        <FiChevronRight />
        <Link to='/dashboard/car' className='font-bold'>List Car</Link>
        <FiChevronRight />
        <div>Add New Car</div>
      </div>
      <div className='my-6'>
        <h1 className='text-2xl font-bold'>Add New Car</h1>
      </div>
      <div className='bg-white rounded-sm p-4 space-y-4'>
        <div className='flex items-center space-x-2'>
          <div className='w-1/6'>Nama<span className='text-red-500'>*</span></div>
          <div className='w-1/3 bg-white border border-gray-500 text-gray-500 rounded-sm px-3 py-2'>Placeholder</div>
        </div>
        <div className='flex items-center space-x-2'>
          <div className='w-1/6'>Harga<span className='text-red-500'>*</span></div>
          <div className='w-1/3 bg-white border border-gray-500 text-gray-500 rounded-sm px-3 py-2'>Placeholder</div>
        </div>
        <div className='flex items-center space-x-2'>
          <div className='w-1/6'>Foto<span className='text-red-500'>*</span></div>
          <div className='w-1/3 space-y-1'>
            <div className='bg-white border border-gray-500 text-gray-500 rounded-sm px-3 py-2'>
              <div className='flex justify-between items-center'>
                <div>IMG/2/2022/001</div>
                <FiUpload />
              </div>
            </div>
            <div className='text-xs text-gray-500'>File size max. 2MB</div>
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          <div className='w-1/6'>Start Rent</div>
          {/* <div className='w-1/3 bg-white border border-gray-500 text-gray-500 rounded-sm px-3 py-2'>Placeholder</div> */}
          <div>-</div>
        </div>
        <div className='flex items-center space-x-2'>
          <div className='w-1/6'>Finish Rent</div>
          {/* <div className='w-1/3 bg-white border border-gray-500 text-gray-500 rounded-sm px-3 py-2'>Placeholder</div> */}
          <div>-</div>
        </div>
        <div className='flex items-center space-x-2'>
          <div className='w-1/6'>Created at</div>
          {/* <div className='w-1/3 bg-white border border-gray-500 text-gray-500 rounded-sm px-3 py-2'>Placeholder</div> */}
          <div>-</div>
        </div>
        <div className='flex items-center space-x-2'>
          <div className='w-1/6'>Updated at</div>
          {/* <div className='w-1/3 bg-white border border-gray-500 text-gray-500 rounded-sm px-3 py-2'>Placeholder</div> */}
          <div>-</div>
        </div>
      </div>
      <div className='flex space-x-4 mt-72 mb-1'>
        <div className='bg-white border border-primary rounded-sm font-bold text-primary px-3 py-2'>Cancel</div>
        <div className='bg-primary rounded-sm font-bold text-white px-3 py-2'>Save</div>
      </div>
    </div>
  )
}
