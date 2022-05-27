import { FiArrowLeft, FiCheck } from "react-icons/fi";

export default function Nav() {
  return (
    <div className='flex justify-center mt-10'>
      <div className='w-[87.5%] md:flex space-y-8 md:space-y-0 justify-between'>
        <div className='flex space-x-4'>
          <FiArrowLeft className='text-2xl' />
          <div>
            <div className='font-bold'>Tiket</div>
            <div>Order ID: xxxxxxxx</div>
          </div>
        </div>
        <div className='flex items-center justify-end space-x-2 text-xs'>
          <FiCheck className='bg-primary rounded-full p-1 w-4 h-4 stroke-white' />
          <div>Pilih Metode</div>
          <div className='bg-primary w-7 h-px'></div>
          <FiCheck className='bg-primary rounded-full p-1 w-4 h-4 stroke-white' />
          <div>Bayar</div>
          <div className='bg-primary w-7 h-px'></div>
          <div className='flex justify-center bg-primary rounded-full w-4 text-white'>3</div>
          <div>Tiket</div>
        </div>
      </div>
    </div>
  )
}
