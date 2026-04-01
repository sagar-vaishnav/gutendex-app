import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Book } from "../types/book";
import { fetchBooks } from "../services/api";
import { getBookUrl } from "../utils/getBookUrl";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import "../assets/css/BooksPage.css";
import { ICONS } from "../constants/genres";
import { getIcon } from "../utils/getIcons";
import Spinner from "../components/spinner";
import { t } from "../utils/i18n";

export default function BooksPage() {
  const { genre } = useParams<{ genre: string }>();
  const navigate = useNavigate();
  const [books, setBooks] = useState<Book[]>([]);
  const [next, setNext] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const backIcon = ICONS.find((icon) => icon.name === "Back")?.icon || "";
  const [loading, setLoading] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  /**
   * Debounce effect:
   * Delays search API call until user stops typing for 500ms
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  /**
   * Effect to load books when:
   * - Genre changes
   * - Search query changes
   *
   * @param reset - whether to replace existing books or append
   */
  useEffect(() => {
    const load = async (reset = false) => {
      setLoading(true);

      if (reset) setBooks([]);
      const params: Record<string, string> = {
        ids: "",
        topic: genre || "",
        languages: "en",
        mime_type: "image"        
      };

      if (debouncedSearch) params.search = debouncedSearch;

      const data = await fetchBooks(undefined, params);

      if (!data) return;

      setBooks(reset ? data.results : [...books, ...data.results]);
      setNext(data.next);
      setLoading(false);
    };
    load(true);
  }, [genre, debouncedSearch]);

  const loadMore = async () => {
    if (!next) return;
    setLoading(true);
    const data = await fetchBooks(next);

    if (!data) return;

    setBooks((prev) => [...prev, ...data.results]);
    setNext(data.next);
    setLoading(false);
  };

  /** Hook to detect scroll and trigger loadMore */
  useInfiniteScroll(loadMore);

  /**
   * Handles book click
   * Opens book in preferred format (HTML > PDF > TXT)
   * Shows alert if no valid format is available
   */
  const openBook = (book: Book) => {
    const url = getBookUrl(book.formats);
    if (url) {
      window.open(url, "_blank");
    } else {
      alert("No viewable version available");
    }
    if (loading) return;
  };

  return (
    <div className="home-container">
      <div className="content">
        <div className="header">
          <span className="back-icon" onClick={() => navigate(-1)}>
            <img src={getIcon(backIcon)} className="icon" />
          </span>

          <h2 className="page-title">{genre}</h2>
        </div>

        <SearchBar value={search} onChange={setSearch} />

        <div className="books-grid">
          {books.length > 0 ? (
            books
              .filter((b) => b.formats["image/jpeg"])
              .map((b) => (
                <BookCard key={b.id} book={b} onClick={() => openBook(b)} />
              ))
          ) : !loading ? (
            <p className="no-results">{t("noData")}</p>
          ) : null}
        </div>
        {loading && <Spinner fullScreen />}
      </div>
    </div>
  );
}
