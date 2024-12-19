'use client'
import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

type Book = {
  id: number;
  image: string;
  title: string;
  author: string;
};

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, dragFree: true });
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch books from the API
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/books'); // URL до вашого API
        if (!response.ok) throw new Error('Failed to fetch books');
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  if (loading) return <p>Завантаження...</p>;

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
            <div key={book.id} className="embla__slide bookslider flex flex-col">
              <div className="image  w-[135px] bg-[#D9D9D9] shadow-md rounded-xl">
                <img src={book.image} alt={book.title} className='w-[100%] rounded-xl'/>
                <div className="booktitle">
                <p className='text-[#A7BAD2] font-normal'>{book.author}</p>
                <p className='text-[#30435C] font-semibold'>{book.title}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmblaCarousel;
