import { createRef } from 'react'
import Pdf from 'react-to-pdf'

import { FiCheck, FiDownload } from "react-icons/fi";

export default function Invoice() {
  const ref = createRef()
  return (
    <div>
      <div className='flex justify-center mt-10'>
        <div className='text-center space-y-4'>
          <div className='flex justify-center'>
            <FiCheck className='bg-secondary rounded-full object-center p-1 w-12 h-12 stroke-white' />
          </div>
          <div className='font-bold'>Pembayaran Berhasil!</div>
          <div className='font-light text-gray-500'>Tunjukkan invoice ini ke petugas BCR di titik temu.</div>
        </div>
      </div>
      <div className='flex justify-center mt-10'>
        <div className='w-4/5 md:w-1/2 border rounded-lg p-6 shadow'>
          <div className='flex justify-between mb-6'>
            <div className='font-bold'>Invoice</div>
            <Pdf targetRef={ref} filename='invoice.pdf'>
              {({ toPdf }) =>
                <button
                  className='flex items-center space-x-2 border border-primary rounded-sm font-bold text-primary px-3 py-2'
                  onClick={toPdf}>
                    <FiDownload />
                    <div>Unduh</div>
                </button>
              }
            </Pdf>
          </div>
          <div className='bg-[#eeeeee] border border-[#D0D0D0] max-w-[800px] border-dashed rounded px-3 py-2'>
            <div ref={ref}>
              <div className='flex'>
                <div className='w-1/12'>
                  <div className='bg-primary w-1/2 h-full'></div>
                </div>
                <div className='flex-1 space-y-4 my-10 mr-8'>
                  <div className='font-bold text-4xl'><span className='text-primary'>Binar Car Rental</span> | Invoice</div>
                  <div className='divide-y space-y-4'>
                    <div className='flex items-center space-x-4'>
                      <div>Gambar</div>
                      <div className=''>
                        <div>Tipe Driver</div>
                        <div className='font-bold'>Nama/Tipe Mobil</div>
                      </div>
                    </div>
                    <div className='flex space-x-4 pt-4'>
                      <div>Tanggal</div>
                      <div>Waktu Jemput/Antar</div>
                      <div>Jumlah Penumpang (opsional)</div>
                    </div>
                    <div className='flex justify-end pt-4'>
                      <div className='w-2/5 flex justify-between font-bold text-primary'>
                        <div>Total</div>
                        <div>Rp. xxx.xxx</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
