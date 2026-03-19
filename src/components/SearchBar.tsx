import { ICONS } from "../constants/genres";
import { getIcon } from "../utils/getIcons";
import "../assets/css/SearchBar.css";
import { t } from "../utils/i18n";

interface Props {
  value: string;
  onChange: (val: string) => void;
}


export default function SearchBar({ value, onChange }: Props) {
  const searchIcon = ICONS.find((icon) => icon.name === "Search")?.icon || "";
  return (
    <div className="search-container">
      <img src={getIcon(searchIcon)} className="search-icon" />

      <input
        type="text"
        placeholder={t("search")}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        className="search-input"
      />
    </div>
  );
}
