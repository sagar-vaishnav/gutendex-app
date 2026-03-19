import { useNavigate } from "react-router-dom";
import "../assets/css/Home.css";
import { getIcon } from "../utils/getIcons";
import { GENRES, ICONS } from "../constants/genres";
import { t } from "../utils/i18n";

export default function HomePage() {
  const nextIcon = ICONS.find((icon) => icon.name === "Next") ?.icon || "";
  const navigate = useNavigate();
  const genres = GENRES;
  return (
    <div className="home-container">
      <div className="content">
        <h1 className="h1">{t("title")}</h1>

        <p className="subtitle">
          A social cataloging website that allows you to freely search its
          database of books, annotations, and reviews.
        </p>

        <div className="genre-grid">
          {genres.map((g) => (
            <div
              key={g.name}
              className="genre-card"
              onClick={() => navigate(`/books/${g.name}`)}
            >
              <img src={getIcon(g.icon)} className="icon" />
              <span className="genre-text left">{g.name.toUpperCase()}</span>
              <span className="arrow">
                <img src={getIcon(nextIcon)} className="icon" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
