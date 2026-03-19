interface Props {
  title: string;
  onClick: () => void;
}

export default function GenreCard({ title, onClick }: Props) {
  return (
    <div className="genre-card" onClick={onClick}>
      {title}
    </div>
  );
}
