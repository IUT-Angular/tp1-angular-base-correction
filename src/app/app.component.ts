import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';

import { BookService } from './services/book-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookListComponent],
  templateUrl: './app.component.html',
  providers: [
    BookService
  ]
})
export class AppComponent {
  title = 'angular-tp1-correct';

  constructor(protected bookService: BookService){ }
}
