import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { BOOKS } from '../datas/books.stub';

@Injectable({
  providedIn: 'root'
})
export class BookService {
	private books:Book[] = BOOKS;

	public getAll(): Book[]{
		return this.books;
	}
}
