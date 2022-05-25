export default function Accordion() {
  const faqs = [
      {
          q: 'Apa saja syarat yang dibutuhkan?',
          a: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iure quod odio ipsam! Natus dolorem ea laudantium vitae sit nulla, aut tempore possimus error maiores.'
      },
      {
          q: 'Berapa hari minimal sewa mobil lepas kunci?',
          a: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iure quod odio ipsam! Natus dolorem ea laudantium vitae sit nulla, aut tempore possimus error maiores.'
      },
      {
          q: 'Berapa hari sebelumnya sabaiknya booking sewa mobil?',
          a: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iure quod odio ipsam! Natus dolorem ea laudantium vitae sit nulla, aut tempore possimus error maiores.'
      },
      {
          q: 'Apakah Ada biaya antar-jemput?',
          a: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iure quod odio ipsam! Natus dolorem ea laudantium vitae sit nulla, aut tempore possimus error maiores.'
      },
      {
          q: 'Bagaimana jika terjadi kecelakaan',
          a: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iure quod odio ipsam! Natus dolorem ea laudantium vitae sit nulla, aut tempore possimus error maiores.'
      },
  ]
  return (
      <div>
          <div className='overflow-hidden space-y-4'>
              {faqs.map((item, key) => 
                <div className='relative overflow-hidden border shadow-sm rounded-lg'>
                    <input type='checkbox' className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' />
                    <div className='h-12 w-full pl-5 flex items-center'>
                        <h1 className='text-lg'>
                            {item.q}
                        </h1>
                    </div>
                    <div className='absolute top-3 right-3 transition-transform duration-500 -rotate-90 peer-checked:rotate-90'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                        </svg>
                    </div>
                    <div className='overflow-hidden bg-white transition-all duration-500 max-h-0 peer-checked:max-h-40'>
                        <div className='p-5 border-t'>{item.a}</div>
                    </div>
                </div>
              )}
          </div>
      </div>
  )
}