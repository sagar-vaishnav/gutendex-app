import type { Book } from "../types/book";
import "../assets/css/Book-card.css";

interface Props {
  book: Book;
  onClick: () => void;
}

export default function BookCard({ book, onClick }: Props) {  
  return (
    <div onClick={onClick} className="book-card">
      <img
        className="book-image"
        src={book.formats["image/jpeg"]}
        width="100%"
      />
      <p className="book-title">{book.title}</p>
      <p className="book-author">{book.authors[0]?.name}</p>
    </div>
  );
}
