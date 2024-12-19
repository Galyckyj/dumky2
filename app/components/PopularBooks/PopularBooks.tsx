// dumky/app/components/PopularBooks/PopularBooks.tsx
'use client'
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const books = [
  { id: 1, image: "https://st.booknet.ua/uploads/covers/220/1730881755_52.png", title: "Шепіт дракона", author: "Таня Толчин" },
  { id: 2, image: "https://st.booknet.ua/uploads/covers/120/1733966484_33.jpg", title: "Як одружити короля - 2", author: "Ольга Обська" },
  { id: 3, image: "https://st.booknet.ua/uploads/covers/120/1730307869_40.png", title: "Дружина мимоволі", author: "Аріна Спел" },
  { id: 4, image: "https://st.booknet.ua/uploads/covers/120/1734412256_74.png", title: "Відьма лихої вдачі", author: "Олена Гуйда" },
  { id: 5, image: "https://st.booknet.ua/uploads/covers/120/1733248687_36.png", title: "Назва книги 5", author: "Автор 5" },
  { id: 6, image: "https://st.booknet.ua/uploads/covers/120/1724590959_79.jpg", title: "Назва книги 6", author: "Автор 6" },
  { id: 7, image: "https://st.booknet.ua/uploads/covers/120/1733428567_72.png", title: "Назва книги 7", author: "Автор 7" },
  { id: 8, image: "https://st.booknet.ua/uploads/covers/120/1727538912_15.png", title: "Назва книги 8", author: "Автор 8" },
  { id: 9, image: "https://st.booknet.ua/uploads/covers/120/1732034464_58.png", title: "Назва книги 9", author: "Автор 9" },
  { id: 10, image: "https://st.booknet.ua/uploads/covers/120/1723030448_89.jpg", title: "Назва книги 10", author: "Автор 10" },
];

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, dragFree: true })

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    <div className='book_slider my-10'>
      <div className='mb-7 flex justify-between'>
        <h2 className='text-[#30435C] font-semibold text-lg'>Популярні книги</h2>
        <span>
          <a href="#" className='text-[#30435C] text-sm underline font-semibold'>Більше</a>
        </span>
      </div>
      <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-6">
          {books.map((book) => (
              <div key={book.id} className=" embla__slide bookslider flex flex-col">
                  <div className="image w-[135px] h-[200px] bg-[#D9D9D9] shadow-md rounded-xl">
                    <img src={book.image} alt={book.title} className='w-[100%] rounded-xl'/>
                  </div>
                  <div className="booktitle">
                      <p className='text-[#A7BAD2] font-normal my-1'>{book.author}</p>
                      <p className='text-[#30435C] font-semibold text-ellipsis overflow-hidden'>{book.title}</p>
                  </div>
              </div>
              ))}
          </div>
        </div>
      </div>
    
  )
}

export default EmblaCarousel