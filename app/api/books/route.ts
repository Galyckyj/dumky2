import { NextResponse } from 'next/server';
import { query } from '../../lib/db';  // імпортуємо функцію для запитів до БД

// Функція для обробки GET-запиту
export async function GET() {
  try {
    // SQL-запит для отримання всіх книг
    const books = await query('SELECT id, title, author, image FROM books');
    
    // Повертаємо отримані книги у форматі JSON
    return NextResponse.json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    
    // Повертаємо помилку, якщо не вдалося отримати дані
    return NextResponse.error();
  }
}
