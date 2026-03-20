interface Props {
  fullScreen?: boolean;
}
export default function Spinner({ fullScreen = false }: Props) {
  return (
    <div className={fullScreen ? "spinner-backdrop fullscreen" : "spinner-backdrop"}>
      <div className="spinner"></div>
    </div>
  );
}
